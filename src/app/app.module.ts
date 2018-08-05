//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//SERVICES
import { AuthService } from './services/auth/auth.service';
import { TareaService } from './services/tasks/tarea.service';

//ENVIRONMENT
import { environment } from '../environments/environment';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//GUARDS
import { AuthGuard } from './guards/auth.guard';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareasListComponent } from './components/tareas/tareas-list/tareas-list.component';
import { TareaComponent } from './components/tareas/tarea/tarea.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    NotfoundpageComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    TareasComponent,
    TareasListComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
 
  ],
  providers: [
    AuthService,
    AuthGuard,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
