import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemServicoRoutingModule } from './ordem-servico-routing.module';
import { OrdemServicoFormComponent } from './ordem-servico-form/ordem-servico-form.component';
import { OrdemServicoListaComponent } from './ordem-servico-lista/ordem-servico-lista.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';
import {OrdemServicoFormReadComponent} from './ordem-servico-form/ordem-servico-form-read.component';
import {OrdemServicoAprovacaoComponent} from './ordem-servico-lista/ordem-servico-aprovacao.component';
import {OrdemServicoFormAprovacaoComponent} from './ordem-servico-form/ordem-servico-form-aprovacao.component';

@NgModule({
  declarations: [OrdemServicoFormComponent,
    OrdemServicoFormReadComponent,
    OrdemServicoFormAprovacaoComponent,
    OrdemServicoListaComponent,
    OrdemServicoAprovacaoComponent],
  imports: [
    CommonModule,
    OrdemServicoRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ReactiveFormsModule
  ], exports: [OrdemServicoFormComponent, OrdemServicoFormReadComponent, OrdemServicoListaComponent, OrdemServicoAprovacaoComponent]
})
export class OrdemServicoModule { }
