import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormCursosComponent } from './form-cursos/form-cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    FormCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CursosComponent,
    FormCursosComponent
  ]
})
export class CursosModule { }
