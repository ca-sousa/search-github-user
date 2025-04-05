import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GithubUser } from '../../../interfaces/github';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  imports: [NgOptimizedImage],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  @Input() userInformation!: GithubUser

  constructor(private router: Router) {}

  navigateToRepositoriesList() {
    this.router.navigate(['/repositories-list', this.userInformation.login])
  }
}
