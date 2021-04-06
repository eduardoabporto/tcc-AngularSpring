import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import {empresaBusca} from '../../empresa/empresa-lista/empresaBusca';
import {clientesBusca} from './clientesBusca';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  public paginaAtual = 1;

  nome: string;
  clientes: Cliente[] = [];
  clientesSelecionado: Cliente;
  mensagemSucesso: String;
  mensagemErro: String;
  message: string;
  lista: clientesBusca[];

  constructor(
    private service: ClientesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe( resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clientesSelecionado = cliente;
  }

  deletarCliente(){
    this.service
      .deletar(this.clientesSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar o cliente.')
  }

  consultar(){
    this.service
      .buscar(this.nome)
      .subscribe(response => {
        this.lista = response;
        if(this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
  }

  imprimeRelatorio(){
    return this.service.downloadPdfRelatorio();
  }

}
