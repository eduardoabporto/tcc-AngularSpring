import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { NgxMaskModule } from 'ngx-mask';
import { EmpresaModule} from '../empresa/empresa.module';
import { ClientesFormReadComponent } from './clientes-form/clientes-form-read.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesFormReadComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    EmpresaModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],exports: [
    ClientesFormComponent,
    ClientesFormReadComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
