import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { Usuario } from "./usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private urlEndpoint:string="http://localhost:8080/api/usuarios"
    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

    constructor(private http: HttpClient) { }

    getUsuarios():Observable<Usuario[]>{
        return this.http.get(this.urlEndpoint).pipe(
            map((response)=> response as Usuario[])
        )
    }

    create(usuario:Usuario):Observable<Usuario>{
        return this.http.post<Usuario>(this.urlEndpoint, usuario, {headers: this.httpHeaders})
    }

    //Método de editar tarea
    getUsuario(id: any):Observable<Usuario>{
        return this.http.get<Usuario>(`${this.urlEndpoint}/${id}`)
    }

    //Edición final
    update(usuario: Usuario):Observable<Usuario>{
        return this.http.put<Usuario>(`${this.urlEndpoint}/${usuario.id}`, usuario, {headers:this.httpHeaders})
    }

    delete(id:number):Observable<Usuario>{
        return this.http.delete<Usuario>(`${this.urlEndpoint}/${id}`, {headers:this.httpHeaders})
    }

    validarCredenciales(usuario: Usuario): Observable<boolean> {
        return this.http.post<boolean>(`${this.urlEndpoint}/login`, usuario, { headers: this.httpHeaders }).pipe(
          catchError((error) => {
            console.error('Error en el servidor:', error);
            return of(false); // Devolver `false` en caso de error para que el login falle.
          })
        );
      }
}
