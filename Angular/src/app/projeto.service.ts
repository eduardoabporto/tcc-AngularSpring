import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Projeto } from './projeto/Projeto';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { projetoBusca } from './projeto/projeto-lista/projetoBusca';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  apiURL: string =  environment.apiURLBase + '/api/projeto';

  constructor(private http: HttpClient) { }

  salvar(projeto: Projeto): Observable<Projeto>{
    return this.http.post<Projeto>(this.apiURL, projeto);
  }

  atualizar(projeto: Projeto): Observable<any> {
    return this.http.put<Projeto>(`${this.apiURL}/${projeto.id}`, projeto);
  }
  buscar(nome: string): Observable<projetoBusca[]>{

    const httpParams = new HttpParams()
      .set('nome', nome);

    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

  getProjetoClienteById(numCliente: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('numCliente', String(numCliente));
    const url = this.apiURL + '/form/' + '?' + httpParams;
    return this.http.get<any>(url);
  }

  getHoraProjetoById(numProjeto: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('numProjeto', String(numProjeto));
    const url = this.apiURL + '/hora-projeto/' + '?' + httpParams;
    return this.http.get<any>(url);
  }

  getProjetoById(id: number): Observable<Projeto> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  getProjeto(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiURL);
  }

  deletar(projeto: Projeto): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${projeto.id}`);
  }

  downloadPdfRelatorio(){
    return this.http.get(this.apiURL + '/relatorio', {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }
}


