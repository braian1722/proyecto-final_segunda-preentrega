import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../../shared/shared.module';
import { UsersComponent } from './users.component';
import { UsersFormComponent } from './componentes/users-form/users-form.component';

import { ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    UsersComponent,
    UsersFormComponent
    
  ]
})
export class UsersModule { }
