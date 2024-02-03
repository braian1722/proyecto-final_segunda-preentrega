import { Component } from '@angular/core';
import { LoaginService } from './core/servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto_final-segunda_preentrega';

  isLoagin:boolean = false;

  constructor(private loaginService :LoaginService){
    this.loaginService.isLoading$.subscribe({
      next: (value) => this.isLoagin = value
    })
  }
}
