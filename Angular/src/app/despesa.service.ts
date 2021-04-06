import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import {Despesa} from './despesa/Despesa';
import {despesaBusca} from './despesa/despesa-lista/despesaBusca';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  apiURL: string =  environment.apiURLBase + '/api/despesa';

  constructor(private http: HttpClient) { }

  salvar(despesa: Despesa): Observable<Despesa>{
    console.log(Despesa);
    return this.http.post<Despesa>(this.apiURL, despesa);
  }

  buscar(nome: string): Observable<despesaBusca[]>{
    const httpParams = new HttpParams()
      .set('nome', nome)
    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

  atualizar(despesa: Despesa): Observable<any> {
    return this.http.put<Despesa>(`${this.apiURL}/${despesa.id}`, despesa);
  }

  getDespesa(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(this.apiURL);
  }

  getDespesaById(id: number): Observable<Despesa> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(despesa: Despesa): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${despesa.id}`);
  }

  downloadPdfRelatorio(){
    return this.http.get(this.apiURL + '/relatorio', {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }

  downloadPdfRelatorioParam(userLog: string){
    console.log(userLog);
    return this.http.post(this.apiURL + '/relatorio/', userLog , {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }

  downloadPdfFormDespesasParam(idDespesas: number){
    console.log(idDespesas);
    return this.http.post(this.apiURL + '/relatorio/despesas', idDespesas , {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }
}


