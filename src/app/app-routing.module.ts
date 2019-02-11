import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSemaforoComponent } from './form-semaforo/form-semaforo.component';

const routes: Routes = [
  { path:'semaforos',component: FormSemaforoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
