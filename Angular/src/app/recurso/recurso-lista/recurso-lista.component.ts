import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recurso } from '../recurso';
import { RecursoService } from '../../recurso.service';

@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.css']
})
export class RecursoListaComponent implements OnInit {

  recurso: Recurso[] = [];
  recursoSelecionado: Recurso;
  mensagemSucesso: String;
  mensagemErro: String;

  constructor(
    private service: RecursoService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getRecurso()
      .subscribe( resposta => this.recurso = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/recurso/form'])
  }

  preparaDelecao(recurso: Recurso){
    this.recursoSelecionado = recurso;
  }

  deletarRecurso(){
    this.service
      .deletar(this.recursoSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Recurso deletado com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar o recurso.')
  }
}
