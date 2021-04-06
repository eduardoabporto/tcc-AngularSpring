import {Injectable} from '@angular/core';
import {Cliente} from './clientes/cliente';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Recurso} from './recurso/recurso';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  apiURL: string = environment.apiURLBase + '/api/recurso';

  constructor(private http: HttpClient) {
  }

  salvar(recurso: Recurso): Observable<Recurso> {
    return this.http.post<Recurso>(`${this.apiURL}`, recurso);
  }

  atualizar(recurso: Recurso): Observable<any> {
    return this.http.put<Recurso>(`${this.apiURL}/${recurso.id}`, recurso);
  }

  getRecurso(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(this.apiURL);
  }

  getRecursoById(id: number): Observable<Recurso> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(recurso: Recurso): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${recurso.id}`);
  }
}
