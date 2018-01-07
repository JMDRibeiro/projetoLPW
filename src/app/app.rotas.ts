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
    {path: 'questao/responder' , component: ResponderQuestaoComponent},
    {path: 'questao/inserir' , component: InserirQuestaoComponent},
    {path: 'questao/editar/:id' , component: InserirQuestaoComponent},
    {path: '' , component: LoginComponent},
    {path: 'questao/listar-todas-crud' , component: ListarTodasQuestoesCRUDComponent},
    {path: 'listas-questoes/listas-questoes-crud' , component: ListasQuestoesCrudComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'cadastro' , component: CadastroComponent},
    {path: 'listas-questoes/inserir' , component: CriarListaQuestoesComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'home/:id' , component: HomeComponent},
    {path: 'perfil' , component: PerfilComponent},
    {path: 'questao/corrigir' , component: ListarQuestoesRespondidasComponent},
    {path: 'questao/listar-questoes/:tipoListagem' , component: ListarQuestoesComponent},
    {path: 'questao/corrigir/:id' , component: CorrigirQuestoesComponent},
    {path: 'questao/corrigidas' , component: ListarCorrigidasComponent},
    {path: 'questao/correcao/:id' , component: CorrecaoComponent},
    {path: 'questao/responder/:id' , component: ResponderQuestaoComponent},
    {path: 'lista-questoes/editar-lista-questoes/:id' , component: CriarListaQuestoesComponent},
    {path: 'listar-listas' , component: ListarListasAlunosComponent},
    {path: 'lista-questoes-aluno/:id' , component: ListaQuestoesAlunosComponent},
    {path: 'listar-dados-alunos' , component: ListarDadosAlunosComponent},
    {path: 'dados-aluno/:id' , component: DadosAlunoComponent},
    {path: 'gerenciar-tags' , component: GerenciarTagsComponent},
];

export const rota : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);