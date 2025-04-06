import { Component, signal } from '@angular/core';
import { RepositoryInformationComponent } from '../../shared/components/repository-information/repository-information.component';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { UserRepositories } from '../../interfaces/github';
import { NgOptimizedImage } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { Subject, takeUntil } from 'rxjs';
import { ErrorComponent } from '../../shared/components/error/error.component';

@Component({
  selector: 'app-repositories-list',
  imports: [RepositoryInformationComponent, NgOptimizedImage, LoadingComponent, ErrorComponent],
  providers: [GithubService],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {
  private destroy$ = new Subject<void>();
  userId!: string;
  loading = signal(false);
  error = signal<number | null>(null);
  userRepositories: UserRepositories[] | undefined;
  orderStarAscending = true;

  constructor(
    private route:ActivatedRoute, 
    private service: GithubService
  ) {}

  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
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
        error: (error) => {
          this.error.set(error.status);
          this.loading.set(false);
        }
      });
  };

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  };

  sortListByStarCount():void {
    this.userRepositories = this.userRepositories?.sort((a, b) => {
      return this.orderStarAscending 
      ? a.stargazers_count - b.stargazers_count
      : b.stargazers_count - a.stargazers_count
    });

    this.orderStarAscending = !this.orderStarAscending;
  };

  sortListByAscendingAlphaOrder():void {
    this.userRepositories = this.userRepositories?.sort((a, b) => a.name.localeCompare(b.name));
  };

  sortListByDescendingAlphaOrder():void {
    this.userRepositories = this.userRepositories?.sort((a, b) => b.name.localeCompare(a.name));
  };
}
