import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea/tarea';
import { TareasService } from '../tarea/tareas-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estadistica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadistica.component.html',
  styleUrl: './estadistica.component.css'
})
export class EstadisticaComponent implements OnInit {
  tarea: Tarea[] = [];
  barras: { name: string, height: number, days: number }[] = [];

  constructor(private tareaService: TareasService) {}

  ngOnInit(): void {
    this.ListTarea();
  }

  ListTarea() {
    this.tareaService.getTareas().subscribe(
      data => {
        this.tarea = data;
        this.calcularAlturas();
      },
      error => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }

  calcularAlturas() {
    const maxHeight = 100; // Altura máxima de la barra en %
    const maxDays = 100; // Máximo de días representado en el gráfico

    // Calculamos las alturas de las barras en base a la fecha de creación
    this.barras = this.tarea.map(t => {
      const today = new Date();
      const fecha = new Date(t.fecha_creacion);
      const diferencia = Math.floor((today.getTime() - fecha.getTime()) / (1000 * 3600 * 24)); // Días desde la creación

      // Escalar la altura en base a maxDays
      const height = Math.min((diferencia / maxDays) * maxHeight, maxHeight); // Limitar a 100% máximo
      return { name: t.namTarea, height, days: diferencia };
    });
  }
}
