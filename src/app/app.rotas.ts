import {Routes,RouterModule} from '@angular/router'
import { VisualizarQuestaoComponent } from 'app/visualizar-questao/visualizar-questao.component';
import { InserirQuestaoComponent } from 'app/inserir-questao/inserir-questao.component';
import { ListarTodasQuestoesComponent } from 'app/listar-todas-questoes/listar-todas-questoes.component';
import { LoginComponent } from 'app/login/login.component';
import { CadastroComponent } from 'app/cadastro/cadastro.component';
import { ListaQuestoesComponent } from 'app/lista-questoes/lista-questoes.component';
import { HomeComponent } from 'app/home/home.component';
import { PerfilComponent} from 'app/perfil/perfil.component';
import { CorrigirQuestoesComponent} from 'app/corrigir-questoes/corrigir-questoes.component';
import { TesteprimeComponent} from 'app/testeprime/testeprime.component';


import {ModuleWithProviders} from '@angular/core'


const APP_ROTAS:Routes = [
    {path: 'responder' , component: VisualizarQuestaoComponent},
    {path: 'inserir' , component: InserirQuestaoComponent},
    {path: '' , component: LoginComponent},
    {path: 'listar-todas' , component: ListarTodasQuestoesComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'cadastrar' , component: CadastroComponent},
    {path: 'criar-lista' , component: ListaQuestoesComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'perfil' , component: PerfilComponent},
    {path: 'corrigir' , component: CorrigirQuestoesComponent},
    {path: 'teste' , component: TesteprimeComponent},
    //{path: '' , component: InserirQuestaoComponent}

];

export const rota : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);