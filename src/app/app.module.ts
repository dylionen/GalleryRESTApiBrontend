import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { LoginComponent } from './login/login.component';

import { FormsModule} from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleriesComponent } from './galleries/galleries.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    GalleriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
