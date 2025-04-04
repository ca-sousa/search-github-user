import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-search',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss'
})
export class HomeSearchComponent {
  githubUser = new FormGroup({
    username: new FormControl('', Validators.required),
  });

  handleSubmit() {
    console.log(this.githubUser.value.username);
  }
}
