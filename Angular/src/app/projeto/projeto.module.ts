import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoListaComponent } from './projeto-lista/projeto-lista.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from 'ngx-order-pipe';
import {ProjetoFormReadComponent} from './projeto-form/projeto-form-read.component';
import {NgxCurrencyModule} from 'ngx-currency';

@NgModule({
  declarations: [ProjetoFormComponent, ProjetoFormReadComponent, ProjetoListaComponent],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    NgxCurrencyModule
  ], exports: [ProjetoFormComponent, ProjetoFormReadComponent, ProjetoListaComponent]
})
export class ProjetoModule { }
