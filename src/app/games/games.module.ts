import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { GalaxyComponent } from './galaxy/galaxy.component';

@NgModule({
  declarations: [
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    GalaxyComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    DialogModule,
    ButtonModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    RippleModule
  ],
  providers: [MessageService],
})
export class GamesModule { }
