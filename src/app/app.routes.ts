import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TareaListComponent } from './components/tarea/tarea-list/tarea-list.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { TareaAddComponent } from './components/tarea/tarea-add/tarea-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
        {path:'',redirectTo:'/home',pathMatch: 'full'},
        {path:'header', component:HeaderComponent},
        {path:'footer', component:FooterComponent},
        {path:'home',component:HomeComponent},
        {path:'tarea/list', component:TareaListComponent},
        {path:'calendario',component:CalendarioComponent},
        {path:'estadistica',component:EstadisticaComponent},
        {path:'tarea-add',component:TareaAddComponent},
        {path:'dashboard',component:DashboardComponent},
        {path:'register',component :RegisterComponent},
        {path:'login',component:LoginComponent}
];
    


