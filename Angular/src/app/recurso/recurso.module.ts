import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoFormComponent } from './recurso-form/recurso-form.component';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    RecursoFormComponent,
    RecursoListaComponent
  ],
  imports: [
    CommonModule,
    RecursoRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],exports: [
    RecursoFormComponent,
    RecursoListaComponent
  ]
})
export class RecursoModule { }
