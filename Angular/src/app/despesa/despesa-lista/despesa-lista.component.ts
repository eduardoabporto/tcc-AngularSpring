import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {Despesa} from '../Despesa';
import {despesaBusca} from './despesa';
import {DespesaService} from '../../despesa.service';

@Component({
  selector: 'app-despesa-lista',
  templateUrl: './despesa-lista.component.html',
  styleUrls: ['./despesa-lista.component.css']
})
export class DespesaListaComponent implements OnInit {

  usuarioLogado: string;

  public paginaAtual = 1;
  nome: string;
  despesa: Despesa[] = [];
  despesaSelecionado: Despesa;
  lista: despesaBusca[];
  message: string;
  mensagemSucesso: String;
  mensagemErro: String;
  botaoClicado: String;

  // Configuração da ordenação
  key: string = 'ID'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(
    private authService: AuthService,
    private despesaService: DespesaService,
    private router: Router,
  )  {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.despesaService
      .getDespesa()
      .subscribe( resposta => this.despesa = resposta);

  }

  preparaDelecao(despesa: Despesa){
    this.despesaSelecionado = despesa;
  }

  deletarDespesa(){
    this.despesaService
      .deletar(this.despesaSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Despesa deletada com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar a Despesa.')
  }

  consultar(){
    this.despesaService
      .buscar(this.nome)
      .subscribe(response => {
        this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message = null;
        }
      });
  }

  imprimeRelatorio(){
    return this.despesaService.downloadPdfRelatorio();
  }

  imprimeRelatorioParam(){
    this.despesaService.downloadPdfRelatorioParam(this.usuarioLogado);
  }

  imprimeFormDespesasParam(idDespesa){
    this.despesaService.downloadPdfFormDespesasParam(idDespesa);
  }

  filterItemsOfType(){
    return this.despesa.filter(x => x.userLog == this.usuarioLogado);
  }

  but_no(value) {
    return this.botaoClicado = value;
  }
}
