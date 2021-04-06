import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';
import {EmpresaFormReadComponent} from './empresa-form/empresa-form-read.component';

const routes: Routes = [
  { path: 'empresa', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form' , component: EmpresaFormComponent},
      { path: 'form/:id' , component: EmpresaFormComponent},
      { path: 'form/read/' , component: EmpresaFormReadComponent},
      { path: 'form/read/:id' , component: EmpresaFormReadComponent},
      { path: 'lista', component: EmpresaListaComponent},
      { path: '', redirectTo: '/empresa/lista', pathMatch: 'full'}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
