import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../clientes/cliente';
import {ClientesService} from '../../clientes.service';
import {OrdemServico} from '../OrdemServico';
import {OrdemServicoService} from '../../ordem-servico.service';
import {Projeto} from '../../projeto/Projeto';
import {ProjetoService} from '../../projeto.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {EmpresaService} from '../../empresa.service';
import {Empresa} from '../../empresa/empresa';
import {AuthService} from '../../auth.service';
import {Usuario} from '../../login/usuario';
import {UsuarioService} from '../../usuario.service';
import * as moment from 'moment';


@Component({
  selector: 'app-ordem-servico-read-form',
  templateUrl: './ordem-servico-form-read.component.html',
  styleUrls: ['./ordem-servico-form-read.component.css']
})
export class OrdemServicoFormReadComponent implements OnInit {

  usuarioLogado: string;

  empresa: Empresa[] = [];
  clientes: Cliente[] = [];
  projetos: Projeto[] = [];
  horaProjeto: Projeto[] = [];
  usuario: Usuario[] = [];
  servico: OrdemServico;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private authService: AuthService,
    private empresaService: EmpresaService,
    private clienteService: ClientesService,
    private ordemService: OrdemServicoService,
    private projetoService: ProjetoService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.servico = new OrdemServico();
    }

  ngOnInit(): void {
    this.servico.userLog = this.authService.getUsuarioAutenticado();
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.ordemService
          .getOrdemServicoById(this.id)
          .subscribe(response => this.servico = response,
            errorResponse => this.servico = new OrdemServico());
      } else {
        this.empresaService
          .getEmpresas()
          .subscribe(response => this.empresa = response);
        this.clienteService
          .getClientes()
          .subscribe(response => this.clientes = response);
      }
    });
  }


  calcDif(){
    let dif1 = moment(this.servico.horaFinal, 'HH:mm').diff(moment(this.servico.horaInicial, 'HH:mm'), 'minutes');
    let dif2 = moment(this.servico.horaTrasl, 'HH:mm').diff(moment(this.servico.horaDesc, 'HH:mm'), 'minutes');
    let dif3 = dif1 + dif2;
    this.servico.horaTrab = moment('00:00', 'HH:mm').add(dif3, 'minutes').format('HH:mm');
  }

  consultarProjeto(idCliente: number){
    this.projetoService
      .getProjetoClienteById(this.servico.idCliente)
      .subscribe(response =>{ this.projetos = response});
  }

  consultarHorasProjeto(idProjeto: number) {
    console.log(idProjeto);
    console.log(this.servico.idProjeto);
    this.projetoService
      .getHoraProjetoById(idProjeto)
      .subscribe(response => {
        this.projetos = response
        console.log(this.projetos);
      });

    var qtdeDesc = this.projetos.map(function(item, indice: 0) {
      return item.horaDesc
    });
    var qtdeTrasl = this.projetos.map(function(item, indice: 0) {
      return item.horaTrasl
    });

    this.servico.horaDesc = qtdeDesc.toString();
    this.servico.horaTrasl = qtdeTrasl.toString();
    this.calcDif();
  }

  onSubmit()  {
    if(this.id){
      this.ordemService
        .atualizar(this.servico)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o empresa.']
        })
    }else {
      this.ordemService
        .salvar(this.servico)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
            this.servico = new OrdemServico();
          },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}
