import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './pages/users/users.module';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosModule } from './pages/cursos/cursos.module';
import { CursosComponent } from './pages/cursos/cursos.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    HomeModule,
    SharedModule,
    CursosModule,

    RouterModule.forChild([
      {
        path: 'user',
        component: UsersComponent
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '**',
        component: HomeComponent,
      },
    ])
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
