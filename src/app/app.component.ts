import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaListComponent } from "./components/tarea/tarea-list/tarea-list.component";
import { HomeComponent } from "./home/home.component";
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TareaAddComponent } from './components/tarea/tarea-add/tarea-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TareaListComponent, 
    HomeComponent,
    CalendarioComponent,
    DetalleTareaComponent,
    EstadisticaComponent,
    FooterComponent,
    HeaderComponent,
    TareaAddComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    DetalleTareaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task_Manager';
}
