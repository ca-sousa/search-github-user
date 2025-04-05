import { Component } from '@angular/core';
import { RepositoryInformationComponent } from '../../shared/components/repository-information/repository-information.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repositories-list',
  imports: [RepositoryInformationComponent],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {
  userId!: string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['user-id'];
    console.log(this.userId)
  }
}
