import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
