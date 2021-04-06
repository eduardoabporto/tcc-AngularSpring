import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';
import {DespesaListaComponent} from './despesa-lista/despesa-lista.component';
import {DespesaFormComponent} from './despesa-form/despesa-form.component';
import {DespesaFormReadComponent} from './despesa-form/despesa-form-read.component';
import {DespesaFormAprovacaoComponent} from './despesa-form/despesa-form-aprovacao.component';
import {DespesaListaAprovacaoComponent} from './despesa-lista/despesa-lista-aprovacao.component';


const routes: Routes = [
  { path: 'despesa', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form', component: DespesaFormComponent},
      { path: 'form/:id' , component: DespesaFormComponent},
      { path: 'form/read', component: DespesaFormReadComponent},
      { path: 'form/read/:id' , component: DespesaFormReadComponent},
      { path: 'form/aprovacao', component: DespesaFormAprovacaoComponent},
      { path: 'form/aprovacao/:id' , component: DespesaFormAprovacaoComponent},
      { path: 'lista/aprovacao', component: DespesaListaAprovacaoComponent},
      { path: 'lista', component: DespesaListaComponent},
      { path: '', redirectTo: '/despesa/lista', pathMatch: 'full'}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaRoutingModule { }
