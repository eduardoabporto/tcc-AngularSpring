import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoDespesaFormComponent } from './tipo-despesa-form/tipo-despesa-form.component';
import { TipoDespesaListaComponent } from './tipo-despesa-lista/tipo-despesa-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';
import {TipoDespesaFormReadComponent} from './tipo-despesa-form/tipo-despesa-form-read.component';

const routes: Routes = [
  { path: 'tipo-despesa', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form' , component: TipoDespesaFormComponent},
      { path: 'form/:id' , component: TipoDespesaFormComponent},
      { path: 'form/read' , component: TipoDespesaFormReadComponent},
      { path: 'form/read/:id' , component: TipoDespesaFormReadComponent},
      { path: 'lista', component: TipoDespesaListaComponent},
      { path: '', redirectTo: '/tipo-despesa/lista', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDespesaRoutingModule { }
