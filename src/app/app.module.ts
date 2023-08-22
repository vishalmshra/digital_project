import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { LoginformComponent } from './loginform/loginform.component';
import { UserlistComponent } from './userlist/userlist.component';
import {DialogModule} from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { DummyComponent } from './dummy/dummy.component';


@NgModule({
  declarations: [
  AppComponent,
  SharedComponent,
 LoginformComponent,
 UserlistComponent,
 RegistrationformComponent,
 DummyComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessageModule,ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DialogModule,
    MessagesModule,
    RouterModule,  
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
