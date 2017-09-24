import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';
import {rota} from './app.rotas';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ListarTodasQuestoesComponent } from './listar-todas-questoes/listar-todas-questoes.component';
import { CorrigirQuestoesComponent } from './corrigir-questoes/corrigir-questoes.component';
import { HomeComponent } from './home/home.component';
import { CriarListaQuestoesComponent } from './criar-lista-questoes/criar-lista-questoes.component';
import { LoginComponent } from './login/login.component';
import { ResponderQuestaoComponent } from './responder-questao/responder-questao.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PerfilComponent } from './perfil/perfil.component';




@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioCadastroComponent,
    HomepageComponent,
    InserirQuestaoComponent,
    CabecalhoComponent,
    ListarTodasQuestoesComponent,
    CorrigirQuestoesComponent,
    HomeComponent,
    CriarListaQuestoesComponent,
    LoginComponent,
    ResponderQuestaoComponent,
    CadastrarComponent,
    PerfilComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    rota,
    TabMenuModule

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
