import { Component } from '@angular/core';
import { RepositoryInformationComponent } from '../../shared/components/repository-information/repository-information.component';

@Component({
  selector: 'app-repositories-list',
  imports: [RepositoryInformationComponent],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {

}
