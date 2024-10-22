import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,  
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule, 
    FloatLabelModule,
    ReactiveFormsModule   
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
