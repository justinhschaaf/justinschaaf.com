import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

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
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
