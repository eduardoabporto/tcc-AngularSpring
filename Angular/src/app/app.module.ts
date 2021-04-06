import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { RecursoModule } from './recurso/recurso.module';
import { RecursoService } from './recurso.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaService } from './empresa.service';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';
import { OrdemServicoService } from './ordem-servico.service';
import { ProjetoModule } from './projeto/projeto.module';
import { ProjetoService } from './projeto.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService} from './auth.service';
import { TokenInterceptor} from './token.interceptor'
import {Recurso} from './recurso/recurso';
import {UsuarioModule} from './usuario/usuario.module';
import {UsuarioService} from './usuario.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {TipoDespesaModule} from './tipo-despesa/tipo-despesa.module';
import {TipoDespesaService} from './tipo-despesa.service';
import {DespesaModule} from './despesa/despesa.module';
import {DespesaService} from './despesa.service';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './componente/bar-chart/bar-chart.component';
import {NgxCurrencyModule} from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TemplateModule,
    AppRoutingModule,
    ClientesModule,
    RecursoModule,
    EmpresaModule,
    TipoDespesaModule,
    RouterModule,
    OrdemServicoModule,
    UsuarioModule,
    ProjetoModule,
    DespesaModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ChartsModule,
    NgxCurrencyModule
  ],
  providers: [
    ClientesService,
    RecursoService,
    EmpresaService,
    TipoDespesaService,
    OrdemServicoService,
    ProjetoService,
    UsuarioService,
    DespesaService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
