import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsRoutingModule} from './students-routing.module';
import {ClassesListComponent} from './classes-list/classes-list.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';


@NgModule({
  declarations: [ClassesListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule {
}
