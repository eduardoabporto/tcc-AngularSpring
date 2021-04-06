import {Injectable} from '@angular/core';
import {Cliente} from './clientes/cliente';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {empresaBusca} from './empresa/empresa-lista/empresaBusca';
import {clientesBusca} from './clientes/clientes-lista/clientesBusca';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http: HttpClient) {
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

  buscar(nome: string): Observable<clientesBusca[]>{

    const httpParams = new HttpParams()
      .set('nome', nome);

    const url = this.apiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }

  downloadPdfRelatorio(){
    return this.http.get(this.apiURL + '/relatorio', {responseType : 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    })
  }
}
