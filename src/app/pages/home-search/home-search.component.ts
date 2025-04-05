import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserInformationComponent } from '../../shared/components/user-information/user-information.component';
import { GithubService } from '../../services/github.service';
import { GithubUser } from '../../interfaces/github';

@Component({
  selector: 'app-home-search',
  imports: [ReactiveFormsModule, NgOptimizedImage, UserInformationComponent],
  providers: [GithubService],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss'
})
export class HomeSearchComponent {
  githubUser!: FormGroup;
  loading = signal(false);
  userInformation: GithubUser | undefined;

  constructor(private service: GithubService) {
    this.githubUser = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  handleSubmit() {
    this.loading.set(true);
    if (this.githubUser.valid) {
      this.service.getGithubUser(this.githubUser.value.username).subscribe({
        next: (res) => {
          if (res) {
            this.userInformation = res;
            console.log(res)
          }
          this.loading.set(false);
          this.githubUser.reset();
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }
  }
}
