import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {throwIfAlreadyLoaded} from './module-import-guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {NavComponent} from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  exports: [
    NavComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
