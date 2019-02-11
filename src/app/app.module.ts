import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule} from '@angular/material';
import { NavFavsComponent } from './nav-favs/nav-favs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormFilmsComponent } from './form-films/form-films.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSemaforoComponent } from './form-semaforo/form-semaforo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFavsComponent,
    FormFilmsComponent,
    FormSemaforoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
