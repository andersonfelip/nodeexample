import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Semaforo } from '../models/semaforo';

const semaforosApiUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SemaforoService {

  constructor(private http: HttpClient) { }

  getListaSemaforos(): Observable<Semaforo> {
    const url = semaforosApiUrl + '/semaforos';
    return this.http.get<Semaforo[]>(url);
  }

  adicionarSemaforo(semaforo: Semaforo): Observable<Semaforo> {
    const url = semaforosApiUrl + '/semaforos';
    return this.http.post<Semaforo[]>(url, semaforo);
  }

  
}
