import { Injectable } from '@angular/core';

//suscribirse a los datos y que reciba una respuesta asincronica
import { Observable } from 'rxjs';

//hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //http = alias se puede poner cualquier nombre, en este caso HTTP
  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos  (getdatos es el nombre de la funcion que yo pongo)
  getDatos():Observable<any>{
    //retorno de datos utilizando el metodo GET en HttpClient que llama a la base de datos JSON o a una URL
    return this.http.get('./assets/db/datos.json');
    //aca podria poner un callback para ver la opcion de problema de conexion del servidor
  }
}
