import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [

   // { path: 'Project', component: ProjectComponent },
    { path: '', component: ProjectComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectMRoutingModule { }
