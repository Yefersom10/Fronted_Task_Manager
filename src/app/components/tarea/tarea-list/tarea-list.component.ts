import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../../../shared/service/tarea.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CalendarioComponent } from '../../calendario/calendario.component';
import { DashboardComponent } from "../../../dashboard/dashboard.component";

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, CalendarioComponent, DashboardComponent],
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {
  
  tarea: Tarea[] = [];

  constructor(private tareaService: TareaService) {}
  
  ngOnInit(): void {
    this.ListTarea();
  }

  ListTarea() {
    this.tareaService.getTareaList().subscribe(
      data => {
        this.tarea = data;
        console.log(this.tarea);
      }
    );
  }
}
