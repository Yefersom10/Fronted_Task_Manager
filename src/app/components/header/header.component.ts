import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo='TASK MANAGER'
  constructor(private router: Router) {}

  iniciarSesion() {
  // Navega a la página de inicio de sesión
  this.router.navigate(['/login']);
  }

  registrarse() {
  // Navega a la página de registro
  this.router.navigate(['/register']);
  }
}
