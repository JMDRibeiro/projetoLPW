import {Routes,RouterModule} from '@angular/router'
import { ResponderQuestaoComponent } from './responder-questao/responder-questao.component';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { ListarTodasQuestoesCRUDComponent } from './listar-todas-questoes-crud/listar-todas-questoes-crud.component';
import { ListasQuestoesCrudComponent } from './listas-questoes-crud/listas-questoes-crud.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CriarListaQuestoesComponent } from './criar-lista-questoes/criar-lista-questoes.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent} from './perfil/perfil.component';
import { CorrigirQuestoesComponent} from './corrigir-questoes/corrigir-questoes.component';
import { ListarQuestoesComponent } from './listar-questoes/listar-questoes.component';
import { ListarQuestoesRespondidasComponent} from './listar-questoes-respondidas/listar-questoes-respondidas.component';
import { ListarCorrigidasComponent} from './listar-corrigidas/listar-corrigidas.component';
import { CorrecaoComponent} from './correcao/correcao.component';
import { ListarListasAlunosComponent} from './listar-listas-alunos/listar-listas-alunos.component';
import { ListaQuestoesAlunosComponent} from './lista-questoes-alunos/lista-questoes-alunos.component';
import { InserirTurmaComponent } from './inserir-turma/inserir-turma.component';
import { ListarTodasCrudTurmaComponent } from './listar-todas-crud-turma/listar-todas-crud-turma.component';
import { GerenciarTagsComponent } from './gerenciar-tags/gerenciar-tags.component';
import { ListarDadosAlunosComponent} from './listar-dados-alunos/listar-dados-alunos.component';
import { DadosAlunoComponent} from './dados-aluno/dados-aluno.component';

import {ModuleWithProviders} from '@angular/core'



const APP_ROTAS:Routes = [
    {path: 'turma/inserir' , component: InserirTurmaComponent},
    {path: 'turma/gerenciar' , component: ListarTodasCrudTurmaComponent},
    {path: 'turma/editar/:id' , component: InserirTurmaComponent},
    {path: 'tag/gerenciar' , component: GerenciarTagsComponent},
    {path: 'responder' , component: ResponderQuestaoComponent},
    {path: 'inserir' , component: InserirQuestaoComponent},
    {path: 'editar/:id' , component: InserirQuestaoComponent},
    {path: '' , component: LoginComponent},
    {path: 'listar-todas-crud' , component: ListarTodasQuestoesCRUDComponent},
    {path: 'listas-questoes-crud' , component: ListasQuestoesCrudComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'cadastro' , component: CadastroComponent},
    {path: 'criar-lista' , component: CriarListaQuestoesComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'home/:id' , component: HomeComponent},
    {path: 'perfil' , component: PerfilComponent},
    {path: 'corrigir' , component: ListarQuestoesRespondidasComponent},
    {path: 'listar-questoes/:tipoListagem' , component: ListarQuestoesComponent},
    {path: 'corrigir/:id' , component: CorrigirQuestoesComponent},
    {path: 'corrigidas' , component: ListarCorrigidasComponent},
    {path: 'correcao/:id' , component: CorrecaoComponent},
    {path: 'responder/:id' , component: ResponderQuestaoComponent},
    {path: 'editar-lista-questoes/:id' , component: CriarListaQuestoesComponent},
    {path: 'listar-listas' , component: ListarListasAlunosComponent},
    {path: 'lista-questoes-aluno/:id' , component: ListaQuestoesAlunosComponent},
    {path: 'listar-dados-alunos' , component: ListarDadosAlunosComponent},
    {path: 'dados-aluno/:id' , component: DadosAlunoComponent},
    {path: 'gerenciar-tags' , component: GerenciarTagsComponent},
];

export const rota : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);