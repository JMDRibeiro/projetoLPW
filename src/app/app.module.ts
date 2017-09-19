import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { ListarTodasQuestoesComponent } from './listar-todas-questoes/listar-todas-questoes.component';
import { VisualizarQuestaoComponent} from './visualizar-questao/visualizar-questao.component';
import { rota } from './app.rotas';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaQuestoesComponent } from './lista-questoes/lista-questoes.component';
import { HomeComponent } from './home/home.component';
import { CalendarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng';
import {MenubarModule, MenuItem} from 'primeng/primeng';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {MegaMenuModule,TabMenuModule} from 'primeng/primeng';
import { PerfilComponent } from './perfil/perfil.component';
import {ChartModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import { CorrigirQuestoesComponent } from './corrigir-questoes/corrigir-questoes.component';
import {PanelModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { TesteprimeComponent } from './testeprime/testeprime.component';






@NgModule({
  declarations: [
    AppComponent,
    InserirQuestaoComponent,
    ListarTodasQuestoesComponent,
    VisualizarQuestaoComponent,
    LoginComponent,
    CadastroComponent,
    ListaQuestoesComponent,
    HomeComponent,
    CabecalhoComponent,
    PerfilComponent,
    CorrigirQuestoesComponent,
    TesteprimeComponent,

  ],
  imports: [
    DataTableModule,
    SharedModule,
    GrowlModule,
    AccordionModule,
    RadioButtonModule,
    PanelModule,
    BrowserModule,
    FormsModule,
    rota,
    InputTextareaModule,
     CalendarModule,
     ButtonModule,
     BrowserAnimationsModule,
     PasswordModule,
     RatingModule,
     EditorModule,
     MenubarModule,
     MegaMenuModule,
     TabMenuModule,
     ChartModule,
     CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
