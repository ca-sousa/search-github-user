import { NgOptimizedImage } from '@angular/common';
import { Component, signal, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserInformationComponent } from '../../shared/components/user-information/user-information.component';
import { GithubService } from '../../services/github.service';
import { GithubUser } from '../../interfaces/github';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { Subject, takeUntil } from 'rxjs';
import { ErrorComponent } from '../../shared/components/error/error.component';

@Component({
  selector: 'app-home-search',
  imports: [ReactiveFormsModule, NgOptimizedImage, UserInformationComponent, LoadingComponent, ErrorComponent],
  providers: [GithubService],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss'
})
export class HomeSearchComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  githubUser!: FormGroup;
  loading = signal(false);
  error = signal<number | null>(null);
  userInformation: GithubUser | undefined;

  constructor(private service: GithubService) {
    this.githubUser = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  handleSubmit() {
    this.loading.set(true);
    this.error.set(null);
    if (this.githubUser.valid) {
      this.service.getGithubUser(this.githubUser.value.username)
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe({
          next: (res) => {
            if (res) {
              this.userInformation = res;
            }
            this.loading.set(false);
            this.githubUser.reset();
          },
          error: (error) => {
            this.error.set(error.status);
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
