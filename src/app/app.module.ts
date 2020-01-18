import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {LayoutModule} from '@angular/cdk/layout';
import {ClassesListComponent} from './students/classes-list/classes-list.component';
import {StudentsModule} from './students/students.module';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StudentsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
