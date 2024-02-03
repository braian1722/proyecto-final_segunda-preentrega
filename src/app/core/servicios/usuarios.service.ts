import { Injectable, Inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Usuarios } from '../../layouts/dashboard/pages/users/models/usuarios';

const ROLES_DB: string[]=[
  'ADMIN',
  'USUARIO'
];


let USERS_DD: Usuarios[]= [

  {
    id: 1,
    firstName: 'braian', 
    lastName: 'kandyba',
    email: 'braian_1732@hotmail.com',
    password: '1234',
    role: 'user',
    assignment: "matematicas"
  },
  {
    id: 2,
    firstName: 'ivan',
    lastName: 'gems',
    email: 'ivan@hotmail.com',
    password: '12334',
    role: 'user',
    assignment: "lengua"

  }  

]; 


@Injectable({
  providedIn: 'root' // esto significa que por defaut nuetro servicio puede ser usado en toda la aplicacion
})
export class UsersService {

  constructor() {
    
  }

  
  getUsers(){
    
    return of (USERS_DD).pipe(delay(2000))//el metodo of taforma a un observable
  }

  getRoles(): Observable <string[]>{
    return of (ROLES_DB).pipe(delay(2000));
  }

  createUser(dataLoad: Usuarios){
    USERS_DD.push(dataLoad);
    return this.getUsers()//actualiza el array
  }

  deleteUser (userID: number){
    USERS_DD = USERS_DD.filter((user)=> user.id !== userID);
    return this.getUsers()
  }

  // getUserById(id:number | string): Observable< Usuarios | undefined>{
    
  //   return of (USERS_DD.find((user) => user.id == id)).pipe(delay(1000))

  // }
}
