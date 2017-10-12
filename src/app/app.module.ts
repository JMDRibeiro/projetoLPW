import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import {rota} from './app.rotas';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
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
import { HomeComponent } from './home/home.component';
import { CriarListaQuestoesComponent } from './criar-lista-questoes/criar-lista-questoes.component';
import { LoginComponent } from './login/login.component';
import { ResponderQuestaoComponent } from './responder-questao/responder-questao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CorrigirQuestoesComponent } from './corrigir-questoes/corrigir-questoes.component';
import {RadioButtonModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import { QuestaoService } from './questao.service';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {UsuarioService} from './usuario-service.service';
import {MessageService} from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    InserirQuestaoComponent,
    CabecalhoComponent,
    ListarTodasQuestoesComponent,
    HomeComponent,
    CriarListaQuestoesComponent,
    LoginComponent,
    ResponderQuestaoComponent,
    CadastroComponent,
    PerfilComponent,
    CorrigirQuestoesComponent,
    
    
  ],
  imports: [
    DialogModule,
    DataTableModule,
    SharedModule,
    ListboxModule,
    MenubarModule,
    RadioButtonModule,
    CalendarModule,
    BrowserModule,
    CheckboxModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    PanelMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    rota,
    TabMenuModule,
    MenubarModule,
    GrowlModule,
    DropdownModule   
  ],
  providers: [QuestaoService,UsuarioService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
