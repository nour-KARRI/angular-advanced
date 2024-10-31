import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormModuleRoutingModule } from './complex-form-module-routing.module';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { SharedModule } from '../../shared/shared.module';
import { FormComplexService } from './services/form-complex.service';


@NgModule({
  declarations: [
    ComplexFormComponent
  ],
  imports: [
    CommonModule,
    ComplexFormModuleRoutingModule,
    SharedModule
  ],
  providers:[
    FormComplexService
  ]
})
export class ComplexFormModuleModule { }
