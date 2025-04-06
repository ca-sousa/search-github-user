import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchComponent } from './home-search.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { UserInformationComponent } from '../../shared/components/user-information/user-information.component';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from '../../services/github.service';

describe('HomeSearchComponent', () => {
  let component: HomeSearchComponent;
  let fixture: ComponentFixture<HomeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSearchComponent, HttpClientTestingModule, ReactiveFormsModule, NgOptimizedImage, UserInformationComponent, LoadingComponent, ErrorComponent],
      providers: [GithubService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render page title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Github Search');
  });

  it('should call handleSubmit function on button click', () => {
    spyOn(component, 'handleSubmit'); 

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'octocat';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.handleSubmit).toHaveBeenCalled();
  });

  it('should render loading component when loading signal is true', () => {
    component.loading.set(true);
    fixture.detectChanges();

    const loadingImage = fixture.nativeElement.querySelector('img');
    expect(loadingImage).toBeTruthy();
  });
});
