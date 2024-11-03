import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule],
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
