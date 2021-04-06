import {Injectable} from '@angular/core';
import {Empresa} from './empresa/empresa';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {TipoDespesa} from './tipo-despesa/TipoDespesa';
import {empresaBusca} from './empresa/empresa-lista/empresaBusca';
import {tipoDespesaBusca} from './tipo-despesa/tipo-despesa-lista/tipoDespesaBusca';

@Injectable({
  providedIn: 'root'
})
export class TipoDespesaService {

  apiURL: string = environment.apiURLBase + '/api/tipo-despesa';

  constructor(private http: HttpClient) {
  }

  salvar(tipoDespesa: TipoDespesa): Observable<TipoDespesa> {
    return this.http.post<TipoDespesa>(`${this.apiURL}`, tipoDespesa);
  }

  atualizar(tipoDespesa: TipoDespesa): Observable<any> {
    return this.http.put<TipoDespesa>(`${this.apiURL}/${tipoDespesa.id}`, tipoDespesa);
  }

  buscar(nome: string): Observable<tipoDespesaBusca[]>{

    const httpParams = new HttpParams()
      .set('nome', nome);

    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

  getTipoDespesa(): Observable<TipoDespesa[]> {
    return this.http.get<TipoDespesa[]>(this.apiURL);
  }


  getTipoDespesaById(id: number): Observable<TipoDespesa> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(tipoDespesa: TipoDespesa): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${tipoDespesa.id}`);
  }

  downloadPdfRelatorio(){
    return this.http.get(this.apiURL + '/relatorio', {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }
}
