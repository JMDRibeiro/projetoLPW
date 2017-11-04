import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {MegaMenuModule} from 'primeng/primeng';

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
import {InputTextareaModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ListarTodasQuestoesCRUDComponent } from './listar-todas-questoes-crud/listar-todas-questoes-crud.component';
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
import {QuestaoRespondidaService} from './questao-respondida.service';
import {MessageService} from 'primeng/components/common/messageservice';
import { ListarQuestoesComponent } from './listar-questoes/listar-questoes.component';
import { ListarQuestoesRespondidasComponent } from './listar-questoes-respondidas/listar-questoes-respondidas.component';
import { ListarCorrigidasComponent } from './listar-corrigidas/listar-corrigidas.component';
import { CorrecaoComponent } from './correcao/correcao.component';
import { ListasQuestoesCrudComponent } from './listas-questoes-crud/listas-questoes-crud.component';
import {ListaQuestoesService} from './lista-questoes.service';
import { ListarListasQuestoesComponent } from './listar-listas-questoes/listar-listas-questoes.component';
import { ListarListasAlunosComponent } from './listar-listas-alunos/listar-listas-alunos.component';
import { ListaQuestoesAlunosComponent } from './lista-questoes-alunos/lista-questoes-alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    InserirQuestaoComponent,
    CabecalhoComponent,
    ListarTodasQuestoesCRUDComponent,
    HomeComponent,
    CriarListaQuestoesComponent,
    LoginComponent,
    ResponderQuestaoComponent,
    CadastroComponent,
    PerfilComponent,
    CorrigirQuestoesComponent,
    ListarQuestoesComponent,
    ListarQuestoesRespondidasComponent,
    ListarCorrigidasComponent,
    CorrecaoComponent,
    ListasQuestoesCrudComponent,
    ListarListasQuestoesComponent,
    ListarListasAlunosComponent,
    ListaQuestoesAlunosComponent,
    
    
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
    MegaMenuModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    PanelMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    rota,
    InputTextareaModule,
    TabMenuModule,
    MenubarModule,
    GrowlModule,
    DropdownModule   
  ],
  providers: [QuestaoService,UsuarioService,MessageService,QuestaoRespondidaService,ListaQuestoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
