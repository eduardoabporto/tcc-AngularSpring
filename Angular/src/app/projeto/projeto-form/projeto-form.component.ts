import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { Projeto } from '../Projeto';
import { ProjetoService } from '../../projeto.service';
import { OrdemServico } from '../../ordem-servico/OrdemServico';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

  clientes: Cliente[] = []
  projeto: Projeto[] = []
  projetoSelecionado: Projeto;
  success: boolean = false
  errors: String[];
  id: number;

  constructor(
    private clienteService: ClientesService,
    private projetoService: ProjetoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.projetoSelecionado = new Projeto();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.projetoService
          .getProjetoById(this.id)
          .subscribe(response => this.projetoSelecionado = response,
            errorResponse => this.projetoSelecionado = new Projeto());
      } else {
        this.clienteService
          .getClientes()
          .subscribe(response => this.clientes = response);
      }
    });
  }

  onSubmit() {
    if(this.id){
      this.projetoService
        .atualizar(this.projetoSelecionado)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o empresa.']
        })
    }else {
    this.projetoService
      .salvar(this.projetoSelecionado)
      .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.projetoSelecionado = new Projeto();
        },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
  }
  }
}
