import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormTareasComponent } from "../tarea/tareasForm/form-tareas.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-tarea-add',
  standalone: true,
  imports: [FormsModule, TareaComponent, CommonModule, FormTareasComponent, HeaderComponent],
  templateUrl: './tarea-add.component.html',
  styleUrl: './tarea-add.component.css'
})
export class TareaAddComponent {

}
