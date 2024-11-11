import { Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { FormTareasComponent } from './tarea/tareasForm/form-tareas.component';
import { TareaAddComponent } from './tarea-add/tarea-add.component';
import { HeaderComponent } from './header/header.component';
import { PrioridadTareaComponent } from './prioridad-tarea/prioridad-tarea.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch: 'full'},
    {path:'tareas', component:TareaComponent},
    {path:'header', component: HeaderComponent},
    {path:'tareas/form', component:FormTareasComponent},
    {path:'tareas/form/:id', component:FormTareasComponent},
    {path:'tareasAdd', component: TareaAddComponent},
    {path:'prioridadTarea', component: PrioridadTareaComponent},
    {path:'estadistica', component: EstadisticaComponent},
    {path:'home', component: HomeComponent}
];
