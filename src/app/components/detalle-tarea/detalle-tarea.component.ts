import { Component } from '@angular/core';
import { Tarea } from '../tarea/tarea';
import { TareaService } from '../../shared/service/tarea.service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.css'
})
export class DetalleTareaComponent {
  tarea: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.ListTarea();
  }

  ListTarea() {
    this.tareaService.getTareaList().subscribe(data => {
      // Ordena las tareas por fecha de creación o fecha de entrega
      this.tarea = data.sort((a, b) => new Date(a.fecha_creacion).getTime() - new Date(b.fecha_creacion).getTime());
    });
  }
}
