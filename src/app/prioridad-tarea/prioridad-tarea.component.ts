import { Component } from '@angular/core';
import { Tarea } from '../tarea/tarea';
import { TareasService } from '../tarea/tareas-service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-prioridad-tarea',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './prioridad-tarea.component.html',
  styleUrl: './prioridad-tarea.component.css'
})
export class PrioridadTareaComponent {
  tarea: Tarea[] = [];

  constructor(private tareaService: TareasService) {}

  ngOnInit(): void {
    this.ListTarea();
  }

  ListTarea() {
    this.tareaService.getTareas().subscribe(data => {
      // Ordena las tareas por fecha de creación o fecha de entrega
      this.tarea = data.sort((a, b) => new Date(a.fecha_creacion).getTime() - new Date(b.fecha_creacion).getTime());
    });
  }
}
