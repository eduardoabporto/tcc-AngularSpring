import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { NgxMaskModule } from 'ngx-mask';
import {OrderModule} from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ], exports: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ]
})
export class UsuarioModule { }
