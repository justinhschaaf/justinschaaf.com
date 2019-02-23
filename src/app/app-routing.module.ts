import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },

  {
    path: 'project',
    redirectTo: '/projects',
    pathMatch: 'full'
  },

  {
    path: '404',
    component: ErrorComponent
  },

  {
    path: '**',
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
