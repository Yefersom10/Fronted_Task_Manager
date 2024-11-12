import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarea } from './tarea';
import { TareasService } from './tareas-service';
import Swal from 'sweetalert2';
import { CalendarioComponent } from "../calendario/calendario.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [RouterLink, CommonModule, CalendarioComponent, HeaderComponent],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit {
  tareas:Tarea[];

  constructor(private tareasService: TareasService){

  }
  
  ngOnInit(): void {
    this.tareasService.getTareas().subscribe(
      tareas => this.tareas = tareas
    )
  }

  //invocando el método de eliminar
  delete(tarea:Tarea):void{
    Swal.fire({
      title: "Esta segur@?",
      text: `Seguro deseas eliminar la Tarea: ${tarea.namTarea} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tareasService.delete(tarea.id).subscribe(
          response=>{
            this.tareas = this.tareas.filter(tar=> tar !== tarea)
            Swal.fire({
              title: "Borrada!",
              text: `Tu Tarea ha sido eliminada: ${tarea.namTarea}`,
              icon: "success"
            });
          }
        )
      }
    });
  }
}
