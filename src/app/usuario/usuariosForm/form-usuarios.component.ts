import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario-service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from '../usuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-usuarios',
  standalone: true,
  imports: [FormsModule, UsuarioComponent, CommonModule],
  templateUrl: './form-usuarios.component.html'
})
export class FormUsuariosComponent {
  public usuario: Usuario = new Usuario()

  titulo: string = "Formulario de ingreso de Usuarios"

  constructor(private usuarioService: UsuarioService, private router: Router,
    private activatedRouted: ActivatedRoute
  ){}

  ngOnInit(){
    this.cargarUsuario()
  }

  //cargar el usuario actual
  cargarUsuario(): void{
    this.activatedRouted.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
      }
    })
  }

  //Actualizar usuario
  update():void{
    this.usuarioService.update(this.usuario).subscribe(usuario=> {
      this.router.navigate(['/usuarios'])
      Swal.fire('Usuario Actualizado', `Usuario: ${usuario.nomUsuario} Actualizada con éxito!`, 'success')
    })
  }


  public create():void{
  //console.log("clicked");
  console.log(this.usuario);

   this.usuarioService.create(this.usuario).subscribe(usuario => 
    {this.router.navigate(["/login"])
      Swal.fire('Nuevo usuario', `Tarea: ${usuario.nomUsuario} creado con éxito`, 'success')
    }
  );
  }
}
