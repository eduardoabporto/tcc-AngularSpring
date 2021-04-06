import {Empresa} from '../empresa/empresa';
import {Cliente} from '../clientes/cliente';
import {Projeto} from '../projeto/Projeto';
import {Usuario} from '../login/usuario';
import {TipoDespesa} from '../tipo-despesa/TipoDespesa';

export class Despesa{
  id: number;
  assunto: string;
  data: string;
  descricao: string;
  valorDespesa: string;
  idEmpresa: number;
  idCliente: number;
  idProjeto: number;
  idTipoDespesa: number;
  userLog: string;
  atendimento: string;
  empresa: Empresa;
  cliente: Cliente;
  projeto: Projeto;
  tipoDespesa: TipoDespesa;
  aprovacao: string;

}

