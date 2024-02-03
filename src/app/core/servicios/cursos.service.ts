import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';


export interface Cursos {
  id: number;
  name: string;
  turno: string;
  diasCursada: string;
  fechaInicio: Date;
}

let CURSOS_DB:Cursos[]= [
  {
    id:1,
    name: 'programacion 1',
    turno: 'tarde 14:00hs',
    diasCursada: 'mar y jue',
    fechaInicio: new Date()
  },
  {
    id:2,
    name: 'Base de datos 2',
    turno: 'mañana 8:00hs',
    diasCursada: 'lun y mie',
    fechaInicio: new Date()
  },
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {
    
  }

  
  getCursos(){
    
    return of (CURSOS_DB).pipe(delay(2000))//el metodo of taforma a un observable
  }



  createCurso(dataLoad: Cursos){
    CURSOS_DB.push(dataLoad);
    return this.getCursos()//actualiza el array
  }

  deleteCurso (userID: number){
    CURSOS_DB = CURSOS_DB.filter((user)=> user.id !== userID);
    return this.getCursos()
  }

  // getCursoById(id:number | string): Observable< Cursos | undefined>{
    
  //   return of (CURSOS_DB.find((user) => user.id == id)).pipe(delay(1000))

  // }


}
