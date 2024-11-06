import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../tarea';
import { TareaService } from '../../../shared/service/tarea.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../../dashboard/dashboard.component';

@Component({
  selector: 'app-tarea-add',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule, DashboardComponent],
  templateUrl: './tarea-add.component.html',
  styleUrls: ['./tarea-add.component.css']
})
export class TareaAddComponent implements OnInit {
  id: number = 0;
  namTarea: string = '';
  descripcion: string = '';
  fecha_creacion: string = '';
  mensaje: string = '';  // Para mostrar mensajes

  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit(): void { }

  addTarea() {
    // Validar que los campos no estén vacíos
    if (!this.namTarea || !this.descripcion || !this.fecha_creacion) {
      this.mensaje = 'Por favor, completa todos los campos del formulario.';  // Mensaje de error
      return;  // Detener la ejecución si hay campos vacíos
    }

    // Limpiar el mensaje de error si todos los campos están llenos
    this.mensaje = '';

    const fecha = new Date(this.fecha_creacion);
    fecha.setHours(0, 0, 0, 0); // Asegúrate de que la hora esté establecida a 00:00:00

    let tarea = new Tarea(this.id, this.namTarea, this.descripcion, fecha);
    console.log(tarea);
    
    this.tareaService.createTarea(tarea).subscribe(
      res => {
        console.log(res);
        this.mensaje = 'Nueva tarea creada con éxito!';
        this.router.navigate(['/tarea/list']); // Redirigir después de crear la tarea
      },
      error => {
        console.error('Error al crear la tarea:', error);
        this.mensaje = 'Ocurrió un error al crear la tarea. Intenta nuevamente.'; // Mensaje de error en caso de fallo
      }
    );
  }
}
