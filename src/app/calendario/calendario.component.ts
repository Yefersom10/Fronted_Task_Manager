import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Evento {
  titulo: string;
  hora: string;
}

interface DiaCalendario {
  fecha: Date;
  esDelMesActual: boolean;
  eventos: Evento[];
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent implements OnInit{
  fechaActual: Date = new Date();
  diasCalendario: DiaCalendario[] = [];
  diasSemana: string[] = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  fechaSeleccionada: Date | null = null;
  nuevoEvento: Evento = { titulo: '', hora: '' };
  

  ngOnInit() {
    this.generarDiasCalendario();
  }

  generarDiasCalendario() {
    const primerDiaDelMes = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 1);
    const ultimoDiaDelMes = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);

    const fechaInicio = new Date(primerDiaDelMes);
    fechaInicio.setDate(fechaInicio.getDate() - fechaInicio.getDay());

    const fechaFin = new Date(ultimoDiaDelMes);
    fechaFin.setDate(fechaFin.getDate() + (6 - fechaFin.getDay()));

    this.diasCalendario = [];
    let fechaActual = new Date(fechaInicio);

    while (fechaActual <= fechaFin) {
      this.diasCalendario.push({
        fecha: new Date(fechaActual),
        esDelMesActual: fechaActual.getMonth() === this.fechaActual.getMonth(),
        eventos: this.obtenerEventosParaFecha(fechaActual)
      });
      fechaActual.setDate(fechaActual.getDate() + 1);
    }
  }

  obtenerEventosParaFecha(fecha: Date): Evento[] {
    const eventos: Evento[] = [];
    if (fecha.getDate() === 12 && fecha.getMonth() === 9) {
      eventos.push({ titulo: 'Día de la Raza', hora: 'Todo el día' });
    }
    if (fecha.getDate() === 31 && fecha.getMonth() === 9) {
      eventos.push({ titulo: 'Día de las brujas', hora: 'Todo el día' });
    }
    return eventos;
  }

  mesAnterior() {
    this.fechaActual.setMonth(this.fechaActual.getMonth() - 1);
    this.generarDiasCalendario();
  }

  mesSiguiente() {
    this.fechaActual.setMonth(this.fechaActual.getMonth() + 1);
    this.generarDiasCalendario();
  }

  seleccionarFecha(dia: DiaCalendario) {
    this.fechaSeleccionada = dia.fecha;
    this.nuevoEvento = { titulo: '', hora: '' };
  }

  agregarEvento() {
    if (this.fechaSeleccionada && this.nuevoEvento.titulo) {
      const diaSeleccionado = this.diasCalendario.find(d => 
        d.fecha.getDate() === this.fechaSeleccionada!.getDate() &&
        d.fecha.getMonth() === this.fechaSeleccionada!.getMonth() &&
        d.fecha.getFullYear() === this.fechaSeleccionada!.getFullYear()
      );
      
      if (diaSeleccionado) {
        diaSeleccionado.eventos.push({ ...this.nuevoEvento });
        this.nuevoEvento = { titulo: '', hora: '' };
        this.fechaSeleccionada = null;
      }
    }
  }
}
