import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {throwIfAlreadyLoaded} from './module-import-guard';

@NgModule({
  declarations: [],
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
