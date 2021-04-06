import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TipoDespesaRoutingModule } from './tipo-despesa-routing.module';
import { TipoDespesaFormComponent } from './tipo-despesa-form/tipo-despesa-form.component';
import { TipoDespesaListaComponent } from './tipo-despesa-lista/tipo-despesa-lista.component';
import { NgxMaskModule } from 'ngx-mask';
import {TipoDespesaFormReadComponent} from './tipo-despesa-form/tipo-despesa-form-read.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipe, Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    TipoDespesaFormComponent,
    TipoDespesaFormReadComponent,
    TipoDespesaListaComponent
  ],
  imports: [
    CommonModule,
    TipoDespesaRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ], exports: [
    TipoDespesaFormComponent,
    TipoDespesaFormReadComponent,
    TipoDespesaListaComponent
  ]
})
export class TipoDespesaModule { }
