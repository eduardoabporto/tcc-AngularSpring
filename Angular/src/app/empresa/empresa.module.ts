import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { NgxMaskModule } from 'ngx-mask';
import { CnpjPipe } from '../cnpj.pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {EmpresaFormReadComponent} from './empresa-form/empresa-form-read.component';

@NgModule({
  declarations: [
    EmpresaFormComponent,
    EmpresaFormReadComponent,
    EmpresaListaComponent,
    CnpjPipe
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule
  ], exports: [
    EmpresaFormComponent,
    EmpresaFormReadComponent,
    EmpresaListaComponent,
    CnpjPipe
  ]
})
export class EmpresaModule { }
