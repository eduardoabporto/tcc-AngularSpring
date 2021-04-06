import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {TipoDespesa} from '../TipoDespesa';
import {EmpresaService} from '../../empresa.service';
import {Observable} from 'rxjs';
import {TipoDespesaService} from '../../tipo-despesa.service';

@Component({
  selector: 'app-tipo-despesa-form',
  templateUrl: './tipo-despesa-form.component.html',
  styleUrls: ['./tipo-despesa-form.component.css']
})
export class TipoDespesaFormComponent implements OnInit {

  tipoDespesa: TipoDespesa;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private tipoDespesaservice: TipoDespesaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.tipoDespesa = new TipoDespesa();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.tipoDespesaservice
          .getTipoDespesaById(this.id)
          .subscribe(response => this.tipoDespesa = response,
            errorResponse => this.tipoDespesa = new TipoDespesa());
      }
    });
  }

  voltarParaListagem() {
    this.router.navigate(['/tipo-despesa/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.tipoDespesaservice
        .atualizar(this.tipoDespesa)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o Tipo de Despesa.'];
        });
    } else {
      this.tipoDespesaservice
        .salvar(this.tipoDespesa)
        .subscribe(response => {
            this.success = true;
            this.errors = null;
            this.tipoDespesa = response;
          },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }

}
