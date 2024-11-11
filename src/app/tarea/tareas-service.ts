import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Tarea } from "./tarea";

@Injectable({
    providedIn: 'root'
  })
export class TareasService {
  
  private urlEndpoint:string="http://localhost:8080/api/tareas"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  //buscar tareas de la base de datos
  getTareas():Observable<Tarea[]>{
    
   //return of (TAREAS);
   return this.http.get(this.urlEndpoint).pipe(
    map((response)=> response as Tarea[])
   )
  }

  //Método de crear tarea
  create(tarea:Tarea):Observable<Tarea>{
      return this.http.post<Tarea>(this.urlEndpoint, tarea, {headers:this.httpHeaders})
  }

  //Método de editar tarea
  getTarea(id: any):Observable<Tarea>{
    return this.http.get<Tarea>(`${this.urlEndpoint}/${id}`)
  }

  //Edición final
  update(tarea: Tarea):Observable<Tarea>{
    return this.http.put<Tarea>(`${this.urlEndpoint}/${tarea.id}`, tarea, {headers:this.httpHeaders})
  }

  //Eliminar
  delete(id:number):Observable<Tarea>{
    return this.http.delete<Tarea>(`${this.urlEndpoint}/${id}`, {headers:this.httpHeaders})
  }
}
