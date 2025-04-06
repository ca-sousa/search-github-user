import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserRepositories } from '../../../interfaces/github';

@Component({
  selector: 'app-repository-information',
  imports: [NgOptimizedImage],
  templateUrl: './repository-information.component.html',
  styleUrl: './repository-information.component.scss'
})
export class RepositoryInformationComponent {
  @Input() repositoryInformation!: UserRepositories;
}
