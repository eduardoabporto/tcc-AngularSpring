import { Component, OnInit } from '@angular/core';
import { ordemServicoBusca} from './ordemServicoBusca';
import { OrdemServicoService } from '../../ordem-servico.service';
import { OrdemServico} from '../OrdemServico';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-ordem-servico-lista',
  templateUrl: './ordem-servico-lista.component.html',
  styleUrls: ['./ordem-servico-lista.component.css']
})
export class OrdemServicoListaComponent implements OnInit {

  usuarioLogado: string;

  public paginaAtual = 1;
  nome: string;
  ordemServicos: OrdemServico[] = [];
  ordemServicoSelecionado: OrdemServico;
  lista: ordemServicoBusca[];
  message: string;
  mensagemSucesso: String;
  mensagemErro: String;

  // Configuração da ordenação
  key: string = 'ID'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(
    private authService: AuthService,
    private ordemServicoService: OrdemServicoService,
    private router: Router,
  )  {}

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.ordemServicoService
      .getOrdemServico()
      .subscribe( resposta => this.ordemServicos = resposta);

  }

  preparaDelecao(ordemServico: OrdemServico){
    this.ordemServicoSelecionado = ordemServico;
  }

  deletarOrdemServico(){
    this.ordemServicoService
      .deletar(this.ordemServicoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Ordem Servico deletada com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar a Ordem de Servico.')
  }

  consultar(){
    this.ordemServicoService
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
    return this.ordemServicoService.downloadPdfRelatorio();
  }


  imprimeRelatorioParam(){
    this.ordemServicoService.downloadPdfRelatorioParam(this.usuarioLogado);
  }

  imprimeFormOSParam(idOS){
    this.ordemServicoService.downloadPdfFormOSParam(idOS);
  }

  filterItemsOfType(){
    return this.ordemServicos.filter(x => x.userLog == this.usuarioLogado);
  }
}
