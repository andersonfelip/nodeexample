import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Semaforo } from '../models/semaforo';
import { SemaforoService } from '../services/semaforo.service';

@Component({
  selector: 'app-form-semaforo',
  templateUrl: './form-semaforo.component.html',
  styleUrls: ['./form-semaforo.component.css']
})
export class FormSemaforoComponent implements OnInit {
  semaforo: Semaforo;
  semaforoForm = this.fb.group({
    id: null,
    latitude: [null, Validators.required],
    longetude: [null, Validators.required]
  });

  displayedColumns: string[] = ['Id', 'Latitude', 'Longitude'];
  listaSemaforos: Semaforo;

  constructor(private fb: FormBuilder, private service: SemaforoService) {}

  salvar() {
    this.semaforo = this.semaforoForm.value;
    this.service.adicionarSemaforo(this.semaforoForm.value).subscribe(
      (res) => {
        alert('Thanks! : ' + JSON.stringify(res));
        this.listarSemaforos();
      },
      (err) => {alert('There is a problem!' + JSON.stringify(err)); }
    );
  }

  ngOnInit(): void {
    this.listarSemaforos();
  }

  listarSemaforos(): void {
    this.service.getListaSemaforos().subscribe(
      (res) => {this.listaSemaforos = res; },
      (err) => {alert('There is a problem!' + JSON.stringify(err)); }
    );
  }
}