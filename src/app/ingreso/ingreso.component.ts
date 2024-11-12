  import { Component } from '@angular/core';
  import Swal from 'sweetalert2';
  import { UsuarioService } from '../usuario/usuario-service';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Usuario } from '../usuario/usuario';
  import { UsuarioComponent } from '../usuario/usuario.component';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-ingreso',
    standalone: true,
    imports: [UsuarioComponent, CommonModule, FormsModule],
    templateUrl: './ingreso.component.html',
    styleUrl: './ingreso.component.css'
  })
  export class IngresoComponent {
    public usuario: Usuario = new Usuario();
    titulo: string = "Ingresar";

    constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) {}

    public login(): void {
      this.usuarioService.getUsuarios().subscribe(
        (usuarios) => {
          const usuarioValido = usuarios.find(
            (user) => user.nomUsuario === this.usuario.nomUsuario && user.contrasenia === this.usuario.contrasenia
          );
  
          if (usuarioValido) {
            Swal.fire('Login exitoso', 'Has iniciado sesión correctamente', 'success');
            this.router.navigate(['/home']); // Cambia la ruta aquí
          } else {
            Swal.fire('Error', 'Credenciales incorrectas', 'error');
          }
        },
        (error) => {
          Swal.fire('Error', 'Ha ocurrido un problema al conectar con el servidor', 'error');
        }
      );
    }

    public goToRegister(): void {
      this.router.navigate(['/usuarioAdd']);
    }
  }
