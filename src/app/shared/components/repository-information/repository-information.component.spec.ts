import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryInformationComponent } from './repository-information.component';
import { NgOptimizedImage } from '@angular/common';

describe('RepositoryInformationComponent', () => {
  let component: RepositoryInformationComponent;
  let fixture: ComponentFixture<RepositoryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryInformationComponent, NgOptimizedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryInformationComponent);
    component = fixture.componentInstance;
    component.repositoryInformation = {
      id: 1,
      name: 'monalisa octocat',
      description: "There once was...",
      html_url: 'https://github.com/octocat/Hello-World',
      stargazers_count: 2, 
      language: 'JavaScript',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render repositoryInformation component with Input Information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('monalisa octocat');
  });
});
