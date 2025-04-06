import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserInformationComponent } from '../../shared/components/user-information/user-information.component';
import { GithubService } from '../../services/github.service';
import { GithubUser } from '../../interfaces/github';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-search',
  imports: [ReactiveFormsModule, NgOptimizedImage, UserInformationComponent, LoadingComponent],
  providers: [GithubService],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss'
})
export class HomeSearchComponent {
  private destroy$ = new Subject<void>();
  githubUser!: FormGroup;
  loading = signal(false);
  error = signal('');
  userInformation: GithubUser | undefined;

  constructor(private service: GithubService) {
    this.githubUser = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  handleSubmit() {
    this.loading.set(true);
    if (this.githubUser.valid) {
      this.service.getGithubUser(this.githubUser.value.username)
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (res) => {
            if (res) {
              this.userInformation = res;
              console.log(res)
            }
            this.loading.set(false);
            this.githubUser.reset();
          },
          error: (error) => {
            this.error.set(error);
            this.loading.set(false);
          }
        });
      }
  };

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
