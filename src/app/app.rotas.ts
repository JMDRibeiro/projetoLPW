import {Routes,RouterModule} from '@angular/router'
import {ModuleWithProviders} from '@angular/core'
import {InsertQuestaoComponent} from './insert-questao/insert-questao.component';



const APP_ROTAS:Routes = [
    {path: '' , component: InsertQuestaoComponent},
];

export const rota : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);