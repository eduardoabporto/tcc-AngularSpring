import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Observable } from 'rxjs';
import {Usuario} from '../../login/usuario';
import {UsuarioService} from '../../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: UsuarioService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
   ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .getUsuarioById(this.id)
          .subscribe(response => this.usuario = response,
            errorResponse => this.usuario = new Usuario())
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/usuario/lista']);
  }
  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          }, errorResponse => {
          this.errors = ['Erro ao atualizar o empresa.']
        })
    }else {
      this.service
        .salvar(this.usuario)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
            this.usuario = response;
          },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })
    }
  }

}
