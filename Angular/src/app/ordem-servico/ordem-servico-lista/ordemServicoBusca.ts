import { Cliente } from '../../clientes/cliente';
import { Projeto } from '../../projeto/Projeto';
import {Empresa} from '../../empresa/empresa';

export class ordemServicoBusca {
  id: number;
  assunto: string;
  descricao: string;
  data: string;
  horaInicial: string;
  horaFinal: string;
  horaTrab: string;
  horaTrasl: string;
  horaDesc: string;
  idEmpresa: number;
  idProjeto: number;
  idCliente: number;
  userLog: string;
  empresa: Empresa;
  cliente: Cliente;
  projeto: Projeto;

}
