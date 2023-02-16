import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Modulo de rotas.
    HttpClientModule, //Modulo de autenticação.
    CabecalhoModule,
    RodapeModule, //Importados para serem rodados em toda a aplicação.
    AutenticacaoModule //modulo do interceptor.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //Modulo principal.
