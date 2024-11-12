import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario-service';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuarios : Usuario[];

  constructor(private usuariosService: UsuarioService){}
  
  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  //invocando el método de eliminar
  delete(usuario:Usuario):void{
    Swal.fire({
      title: "Esta segur@?",
      text: `Seguro deseas eliminar el Usuario: ${usuario.nomUsuario} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.delete(usuario.id).subscribe(
          response=>{
            this.usuarios = this.usuarios.filter(tar=> tar !== usuario)
            Swal.fire({
              title: "Borrada!",
              text: `Tu Usuario ha sido eliminado: ${usuario.nomUsuario}`,
              icon: "success"
            });
          }
        )
      }
    });
  }
}
