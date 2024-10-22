import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error/error.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ChatComponent } from './shared/chat/chat.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environmentsConfig';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ErrorComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    FormsModule,
    FloatLabelModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, provideFirebaseApp(() => initializeApp(environment)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent]
})
export class AppModule { }
