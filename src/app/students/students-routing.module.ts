import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassesListComponent} from '../classes-list/classes-list.component';


const routes: Routes = [
  { path: 'classes', component: ClassesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
