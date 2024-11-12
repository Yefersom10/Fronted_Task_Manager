import { Component } from '@angular/core';
import { FormUsuariosComponent } from "../usuario/usuariosForm/form-usuarios.component";

@Component({
  selector: 'app-usuario-add',
  standalone: true,
  imports: [FormUsuariosComponent, FormUsuariosComponent],
  templateUrl: './usuario-add.component.html',
  styleUrl: './usuario-add.component.css'
})
export class UsuarioAddComponent {

}
