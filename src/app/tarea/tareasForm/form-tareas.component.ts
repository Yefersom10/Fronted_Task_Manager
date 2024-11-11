import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { TareasService } from '../tareas-service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea.component';

@Component({
  selector: 'app-form-tareas',
  standalone: true,
  imports: [FormsModule, TareaComponent, CommonModule],
  templateUrl: './form-tareas.component.html'
})
export class FormTareasComponent {
  public tarea: Tarea = new Tarea()

   titulo:string="Formulario de Ingreso de Tareas"

  constructor(private tareaService: TareasService, private router: Router,
    private activatedRouted: ActivatedRoute
  ){}
  
  ngOnInit(){
    this.cargarTarea()
  }

  //cargar la tarea actual
  cargarTarea(): void{
    this.activatedRouted.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.tareaService.getTarea(id).subscribe( (tarea) => this.tarea = tarea)
      }
    })
  }

  //Actualizar tarea
  update():void{
    this.tareaService.update(this.tarea).subscribe(tarea=> {
      this.router.navigate(['/tareas'])
      Swal.fire('Tarea Actualizada', `Tarea: ${tarea.namTarea} Actualizada con éxito!`, 'success')
    })
  }


  public create():void{
  //console.log("clicked");
  console.log(this.tarea);

   this.tareaService.create(this.tarea).subscribe(tarea => 
    {this.router.navigate(["/tareas"])
      Swal.fire('Nueva tarea', `Tarea: ${tarea.namTarea} creado con éxito`, 'success')
    }
  );
  }
}
