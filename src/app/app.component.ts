import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { FormTareasComponent } from './tarea/tareasForm/form-tareas.component';
import { TareaAddComponent } from './tarea-add/tarea-add.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { HeaderComponent } from './header/header.component';
import { PrioridadTareaComponent } from './prioridad-tarea/prioridad-tarea.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CalendarioComponent, TareaComponent, FormTareasComponent, 
    TareaAddComponent, PrioridadTareaComponent, EstadisticaComponent, UsuarioComponent, IngresoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend_Task_Manager';
}
