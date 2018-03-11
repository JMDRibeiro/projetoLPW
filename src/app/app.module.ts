//básicos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {rota} from './app.rotas';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//módulos primeng7
import {MegaMenuModule} from 'primeng/primeng';
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
import {RadioButtonModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import {ListboxModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';
import {PickListModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';

//firebase
import { AngularFireModule } from 'angularfire2';
import { FireBaseConfig } from "../environments/firebase.config";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { InsertQuestaoComponent } from './insert-questao/insert-questao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

//Serviços
import { Http } from '@angular/http';
import { ConnectionBackend } from '@angular/http';
import { QuestaoService} from './questao.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    InsertQuestaoComponent,
    CabecalhoComponent,    
  ],
  imports: [
    AngularFireModule.initializeApp(FireBaseConfig),
   	AngularFirestoreModule.enablePersistence(),
    ChartModule,
    PickListModule,
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
    DropdownModule,
    HttpModule
    ],
  providers: [MessageService,QuestaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
