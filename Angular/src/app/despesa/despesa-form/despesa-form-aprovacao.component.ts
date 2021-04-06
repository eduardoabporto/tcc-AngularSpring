import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../clientes/cliente';
import {ClientesService} from '../../clientes.service';
import {Despesa} from '../Despesa';
import {Projeto} from '../../projeto/Projeto';
import {ProjetoService} from '../../projeto.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {EmpresaService} from '../../empresa.service';
import {Empresa} from '../../empresa/empresa';
import {AuthService} from '../../auth.service';
import {Usuario} from '../../login/usuario';
import {UsuarioService} from '../../usuario.service';
import {DespesaService} from '../../despesa.service';
import {TipoDespesa} from '../../tipo-despesa/TipoDespesa';
import {TipoDespesaService} from '../../tipo-despesa.service';

@Component({
  selector: 'app-despesa-form-aprovacao',
  templateUrl: './despesa-form-aprovacao.component.html',
  styleUrls: ['./despesa-form-aprovacao.component.css']
})
export class DespesaFormAprovacaoComponent implements OnInit {

  usuarioLogado: string;

  empresa: Empresa[] = [];
  clientes: Cliente[] = [];
  projetos: Projeto[] = [];
  usuario: Usuario[] = [];
  tipoDespesa: TipoDespesa[] = [];
  despesaSelecionada: Despesa;
  success: boolean = false;
  errors: String[];
  id: number;


  constructor(
    private authService: AuthService,
    private empresaService: EmpresaService,
    private clienteService: ClientesService,
    private despesa: DespesaService,
    private projetoService: ProjetoService,
    private tipoDespesaService: TipoDespesaService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.despesaSelecionada = new Despesa();
    }

  ngOnInit(): void {
    this.despesaSelecionada.userLog = this.authService.getUsuarioAutenticado();
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.despesa
          .getDespesaById(this.id)
          .subscribe(response => this.despesaSelecionada = response,
            errorResponse => this.despesaSelecionada = new Despesa());
      } else {
        this.empresaService
          .getEmpresas()
          .subscribe(response => this.empresa = response);
        this.clienteService
          .getClientes()
          .subscribe(response => this.clientes = response);
        this.tipoDespesaService
          .getTipoDespesa()
          .subscribe(response => this.tipoDespesa = response);
      }
    });
  }

  consultarProjeto(idCliente: number){
    this.projetoService
      .getProjetoClienteById(this.despesaSelecionada.idCliente)
      .subscribe(response =>{ this.projetos = response});
  }


  onSubmit()  {
    if(this.id){
      this.despesaSelecionada.aprovacao='Sim'
      this.despesa
        .atualizar(this.despesaSelecionada)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o empresa.']
        })
    }else {
      this.despesa
        .salvar(this.despesaSelecionada)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
            this.despesaSelecionada = new Despesa();
          },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}
