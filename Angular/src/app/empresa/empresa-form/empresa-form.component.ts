import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Empresa } from '../empresa';
import { EmpresaService } from '../../empresa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  empresa: Empresa;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: EmpresaService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
   ) {
    this.empresa = new Empresa();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
          .getEmpresaById(this.id)
          .subscribe(response => this.empresa = response,
            errorResponse => this.empresa = new Empresa())
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/empresa/lista']);
  }
  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.empresa)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          }, errorResponse => {
          this.errors = ['Erro ao atualizar o empresa.']
        })
    }else {
      this.service
        .salvar(this.empresa)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
            this.empresa = response;
          },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })
    }
  }

}
