import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClassesListComponent} from './classes-list/classes-list.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';


const routes: Routes = [
  {path: 'classes', component: ClassesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), AngularMaterialModule],
  exports: [RouterModule]
})
export class StudentsRoutingModule {
}
