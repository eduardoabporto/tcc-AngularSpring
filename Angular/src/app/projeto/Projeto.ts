import {Cliente} from '../clientes/cliente';

export class Projeto {
  id: number;
  nome: string;
  data: string;
  horaTrasl: string;
  horaDesc: number;
  valorHora: string;
  idCliente: number;
  cliente: Cliente;
}

