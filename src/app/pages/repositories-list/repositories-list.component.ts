import { Component, signal } from '@angular/core';
import { RepositoryInformationComponent } from '../../shared/components/repository-information/repository-information.component';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { UserRepositories } from '../../interfaces/github';
import { NgOptimizedImage } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-repositories-list',
  imports: [RepositoryInformationComponent, NgOptimizedImage, LoadingComponent],
  providers: [GithubService],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {
  private destroy$ = new Subject<void>();
  userId!: string;
  loading = signal(false);
  userRepositories: UserRepositories[] | undefined;

  constructor(
    private route:ActivatedRoute, 
    private service: GithubService
  ) {}

  ngOnInit() {
    this.loading.set(true);
    this.userId = this.route.snapshot.params['user-id'];
    this.service.getUserRepositories(this.userId)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.userRepositories = res;
          }
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
  };

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
