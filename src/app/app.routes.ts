import { Routes } from '@angular/router';
import { HomeSearchComponent } from './pages/home-search/home-search.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeSearchComponent
  }
];

// página inicial onde busca o usuário
// página que lista todos os repositórios daquele usuário
// página de detalhes do repositorio 