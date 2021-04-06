import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoFormComponent } from './recurso-form/recurso-form.component';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard} from '../auth.guard';

const routes: Routes = [
  { path: 'recurso', component: LayoutComponent, canActivate:[AuthGuard],
    children: [
      { path: 'form' , component: RecursoFormComponent},
      { path: 'form/:id' , component: RecursoFormComponent},
      { path: 'lista', component: RecursoListaComponent},
      { path: '', redirectTo: '/recurso/lista', pathMatch: 'full'}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursoRoutingModule { }
