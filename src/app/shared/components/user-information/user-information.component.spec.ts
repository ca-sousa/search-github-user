import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationComponent } from './user-information.component';
import { NgOptimizedImage } from '@angular/common';

describe('UserInformationComponent', () => {
  let component: UserInformationComponent;
  let fixture: ComponentFixture<UserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformationComponent, NgOptimizedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationComponent);
    component = fixture.componentInstance;
    component.userInformation = {
      id: 1,
      login: 'octocat',
      name: 'monalisa octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/49310404?v=4',
      html_url: 'https://github.com/octocat',
      location: "San Francisco",
      bio: "There once was...",
      public_repos: 2, 
      followers: 20,
      following: 0,
    }
    fixture.detectChanges();
  });

  it('should render userInformation component with Input Information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('monalisa octocat');
  });

  it('should call navigate function on button click', () => {
    spyOn(component, 'navigateToRepositoriesList'); 

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.navigateToRepositoriesList).toHaveBeenCalled();
  });
});
