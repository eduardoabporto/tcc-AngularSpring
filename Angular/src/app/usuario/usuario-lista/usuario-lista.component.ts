import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../login/usuario';
import { UsuarioService } from '../../usuario.service';
import {projetoBusca} from '../../projeto/projeto-lista/projetoBusca';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  public paginaAtual = 1;

  nome: string;
  usuarios: Usuario[] = [];
  usuarioSelecionada: Usuario;
  mensagemSucesso: String;
  mensagemErro: String;

  // Configuração da ordenação
  key: string = ''; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(
    private service: UsuarioService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getUsuario()
      .subscribe( resposta => this.usuarios = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/usuario/form'])
  }

  preparaDelecao(usuario: Usuario){
    this.usuarioSelecionada = usuario;
  }

  deletarUsuario(){
    this.service
      .deletar(this.usuarioSelecionada)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Usuario deletado com sucesso!'
          this.ngOnInit()},
        erro =>
          this.mensagemErro = 'Ocorreu ao deletar o usuario.')
  }

  imprimeRelatorio(){
    return this.service.downloadPdfRelatorio();
  }

}
