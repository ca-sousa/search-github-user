import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GithubUser } from '../../../interfaces/github';

@Component({
  selector: 'app-user-information',
  imports: [NgOptimizedImage],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
  @Input() userInformation!: GithubUser
}
