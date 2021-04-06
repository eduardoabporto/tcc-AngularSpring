import {Empresa} from '../empresa/empresa';
import {Cliente} from '../clientes/cliente';
import {Projeto} from '../projeto/Projeto';
import {Usuario} from '../login/usuario';

export class OrdemServico{
  id: number;
  assunto: string;
  data: string;
  descricao: string;
  horaInicial: string;
  horaFinal: string;
  horaTrasl: string;
  horaDesc: string;
  horaTrab: string;
  idEmpresa: number;
  idCliente: number;
  idProjeto: number;
  userLog: string;
  atendimento: string;
  empresa: Empresa;
  cliente: Cliente;
  projeto: Projeto;
  aprovacao: string;

}

