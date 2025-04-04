import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-information',
  imports: [NgOptimizedImage],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  userInformation = {
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
  };
}
