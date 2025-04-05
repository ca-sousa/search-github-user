import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-repository-information',
  imports: [NgOptimizedImage],
  templateUrl: './repository-information.component.html',
  styleUrl: './repository-information.component.scss'
})
export class RepositoryInformationComponent {
  repositoryInformation = {
    id: 1,
    name: 'monalisa octocat',
    description: "There once was...",
    html_url: 'https://github.com/octocat/Hello-World',
    stargazers_count: 2, 
    language: 'JavaScript',
  };
}
