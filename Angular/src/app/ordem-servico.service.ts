import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { OrdemServico } from './ordem-servico/OrdemServico';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ordemServicoBusca } from './ordem-servico/ordem-servico-lista/ordemServicoBusca';
import {Cliente} from './clientes/cliente';
import {Projeto} from './projeto/Projeto';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  apiURL: string =  environment.apiURLBase + '/api/ordem-servico';

  constructor(private http: HttpClient) { }

  salvar(ordemServico: OrdemServico): Observable<OrdemServico>{
    console.log(ordemServico);
    return this.http.post<OrdemServico>(this.apiURL, ordemServico);
  }

  buscar(nome: string): Observable<ordemServicoBusca[]>{
    const httpParams = new HttpParams()
      .set('nome', nome)
    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

  atualizar(ordemServico: OrdemServico): Observable<any> {
    return this.http.put<OrdemServico>(`${this.apiURL}/${ordemServico.id}`, ordemServico);
  }

  getOrdemServico(): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(this.apiURL);
  }

  getOrdemServicoById(id: number): Observable<OrdemServico> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(ordemServico: OrdemServico): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${ordemServico.id}`);
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

  downloadPdfFormOSParam(idOS: number){
    console.log(idOS);
    return this.http.post(this.apiURL + '/relatorio/os', idOS , {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }
}


