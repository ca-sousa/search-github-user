import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesListComponent } from './repositories-list.component';
import { RepositoryInformationComponent } from '../../shared/components/repository-information/repository-information.component';
import { NgOptimizedImage } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { GithubService } from '../../services/github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('RepositoriesListComponent', () => {
  let component: RepositoriesListComponent;
  let fixture: ComponentFixture<RepositoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesListComponent, HttpClientTestingModule, RepositoryInformationComponent, NgOptimizedImage, LoadingComponent, ErrorComponent],
      providers: [GithubService, 
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { 'user-id': 'ca-sousa' },
            }
          }
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Lista de repositórios do ca-sousa');
  });

  it('should call sortListByStarCount function on button click', () => {
    component.error.set(null);
    component.loading.set(false);
    component.userRepositories = [
      {
        id: 1,
        name: 'monalisa octocat',
        description: "There once was...",
        html_url: 'https://github.com/octocat/Hello-World',
        stargazers_count: 2, 
        language: 'JavaScript',
      },
    ];
    fixture.detectChanges();

    spyOn(component, 'sortListByStarCount'); 

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="button-start-sort"]');
    console.log(button);
    button.click();
    expect(component.sortListByStarCount).toHaveBeenCalled();
  });

  it('should call sortListByStarCount function on button click', () => {
    component.error.set(null);
    component.loading.set(false);
    component.userRepositories = [
      {
        id: 1,
        name: 'monalisa octocat',
        description: "There once was...",
        html_url: 'https://github.com/octocat/Hello-World',
        stargazers_count: 2, 
        language: 'JavaScript',
      },
    ];
    fixture.detectChanges();

    spyOn(component, 'sortListByStarCount'); 

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="button-start-sort"]');
    button.click();
    expect(component.sortListByStarCount).toHaveBeenCalled();
  });

  it('should call sortListByAscendingAlphaOrder function on button click', () => {
    component.error.set(null);
    component.loading.set(false);
    component.userRepositories = [
      {
        id: 1,
        name: 'monalisa octocat',
        description: "There once was...",
        html_url: 'https://github.com/octocat/Hello-World',
        stargazers_count: 2, 
        language: 'JavaScript',
      },
    ];
    fixture.detectChanges();

    spyOn(component, 'sortListByAscendingAlphaOrder'); 

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="button-sort-ascending"]');
    button.click();
    expect(component.sortListByAscendingAlphaOrder).toHaveBeenCalled();
  });

  it('should call sortListByDescendingAlphaOrder function on button click', () => {
    component.error.set(null);
    component.loading.set(false);
    component.userRepositories = [
      {
        id: 1,
        name: 'monalisa octocat',
        description: "There once was...",
        html_url: 'https://github.com/octocat/Hello-World',
        stargazers_count: 2, 
        language: 'JavaScript',
      },
    ];
    fixture.detectChanges();

    spyOn(component, 'sortListByDescendingAlphaOrder'); 

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="button-sort-descending"]');
    button.click();
    expect(component.sortListByDescendingAlphaOrder).toHaveBeenCalled();
  });
});
