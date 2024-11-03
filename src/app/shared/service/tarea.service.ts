import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../../components/tarea/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private api : string= 'http://localhost:8080/api/tarea'

  constructor(private http:HttpClient) { }

  getTareaList():Observable<Tarea []>{
    return this.http.get<Tarea []>(this.api);
  }

  createTarea(tarea:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(this.api,tarea);
  }
}
