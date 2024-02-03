import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../../core/servicios/cursos.service';
import { LoaginService } from '../../../../core/servicios/login.service';
import { forkJoin } from 'rxjs';
import { Cursos } from './models/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'turno', 'diasCursada', 'fechaInicio','acciones'];

  dataSource: Cursos[] =[];

  constructor(private cursosService : CursosService, private loginService: LoaginService){

  }

  ngOnInit(): void {
    this.getPageData();
  }
  getPageData(): void{
    this.loginService.setIsLogin(true);// implementando ambos servicios
      this.cursosService.getCursos().subscribe({
      next: (cursos) =>{
        this.dataSource = cursos;
      },
      complete: ()=>{
        this.loginService.setIsLogin(false);
      }
    }) 

  }
  onCursosSudmited(evento: Cursos): void{ 
    this.loginService.setIsLogin(true);
    this.cursosService.createCurso({...evento}).subscribe({
      next:(cursos)=>{
        this.dataSource = [...cursos];
      },
      complete:()=>{
        this.loginService.setIsLogin(false);
      }
    })
  }

  onDeleteCursos(evento:Cursos){ 
    this.loginService.setIsLogin(true);
    
    this.cursosService.deleteCurso(evento.id).subscribe({
      next:(cursos)=>{
        this.dataSource = [...cursos];
      },
      complete:()=>{
        this.loginService.setIsLogin(false);
      }
    })
  }
  
  
}
