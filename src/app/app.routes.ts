import { Routes } from '@angular/router';
import { HomeSearchComponent } from './pages/home-search/home-search.component';
import { RepositoriesListComponent } from './pages/repositories-list/repositories-list.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeSearchComponent
  },
  {
    path: "repositories-list/:user-id",
    component: RepositoriesListComponent
  }
];