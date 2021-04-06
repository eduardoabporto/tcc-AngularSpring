import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Recurso} from '../recurso';
import { RecursoService } from '../../recurso.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-recurso-form',
  templateUrl: './recurso-form.component.html',
  styleUrls: ['./recurso-form.component.css']
})
export class RecursoFormComponent implements OnInit {

  recurso: Recurso;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: RecursoService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
   ) {
    this.recurso = new Recurso();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .getRecursoById(this.id)
          .subscribe(response => this.recurso = response,
            errorResponse => this.recurso = new Recurso())
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/recurso/lista']);
  }
  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.recurso)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          }, errorResponse => {
          this.errors = ['Erro ao atualizar o recurso.']
        })
    }else {
      this.service
        .salvar(this.recurso)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
            this.recurso = response;
          },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })
    }
  }

}
