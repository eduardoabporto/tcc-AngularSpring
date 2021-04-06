import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empresa } from '../empresa';
import { EmpresaService } from '../../empresa.service';
import { empresaBusca } from './empresaBusca';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent implements OnInit {

  public paginaAtual = 1;

  nome: string;
  empresa: Empresa[] = [];
  empresaSelecionada: Empresa;
  mensagemSucesso: String;
  mensagemErro: String;
  message: string;
  lista: empresaBusca[];

  constructor(
    private service: EmpresaService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getEmpresas()
      .subscribe( resposta => this.empresa = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/empresa/form'])
  }

  preparaDelecao(empresa: Empresa){
    this.empresaSelecionada = empresa;
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

  deletarEmpresa(){
    this.service
      .deletar(this.empresaSelecionada)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Empresa deletada com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar a empresa.')
  }

  imprimeRelatorio(){
    return this.service.downloadPdfRelatorio();
  }
}
