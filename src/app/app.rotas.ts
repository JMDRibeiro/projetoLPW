import {Routes,RouterModule} from '@angular/router'
import { ResponderQuestaoComponent } from './responder-questao/responder-questao.component';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { ListarTodasQuestoesComponent } from './listar-todas-questoes/listar-todas-questoes.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CriarListaQuestoesComponent } from './criar-lista-questoes/criar-lista-questoes.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent} from './perfil/perfil.component';
import { CorrigirQuestoesComponent} from './corrigir-questoes/corrigir-questoes.component';


import {ModuleWithProviders} from '@angular/core'


const APP_ROTAS:Routes = [
    {path: 'responder' , component: ResponderQuestaoComponent},
    {path: 'inserir' , component: InserirQuestaoComponent},
    {path: 'editar/:id' , component: InserirQuestaoComponent},
    {path: '' , component: LoginComponent},
    {path: 'listar-todas' , component: ListarTodasQuestoesComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'cadastro' , component: CadastroComponent},
    {path: 'criar-lista' , component: CriarListaQuestoesComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'home/:id' , component: HomeComponent},
    {path: 'perfil' , component: PerfilComponent},
    {path: 'corrigir' , component: CorrigirQuestoesComponent},
    //{path: '' , component: InserirQuestaoComponent}

];

export const rota : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);