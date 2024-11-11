import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormTareasComponent } from "../tarea/tareasForm/form-tareas.component";

@Component({
  selector: 'app-tarea-add',
  standalone: true,
  imports: [FormsModule, TareaComponent, CommonModule, FormTareasComponent],
  templateUrl: './tarea-add.component.html',
  styleUrl: './tarea-add.component.css'
})
export class TareaAddComponent {

}
