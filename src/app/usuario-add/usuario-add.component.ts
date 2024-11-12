import { Component } from '@angular/core';
import { FormUsuariosComponent } from "../usuario/usuariosForm/form-usuarios.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-usuario-add',
  standalone: true,
  imports: [FormUsuariosComponent, FormUsuariosComponent, HeaderComponent],
  templateUrl: './usuario-add.component.html',
  styleUrl: './usuario-add.component.css'
})
export class UsuarioAddComponent {

}
