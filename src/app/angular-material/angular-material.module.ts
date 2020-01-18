import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LayoutModule} from '@angular/cdk/layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

const modules: any[] = [
  LayoutModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [...modules, CommonModule],
  exports: [...modules]
})
export class AngularMaterialModule {
}
