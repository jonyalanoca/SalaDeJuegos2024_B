import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './home.component';
import { AhorcadoDetailComponent } from './gamesDetail/ahorcado-detail/ahorcado-detail.component';
import { PreguntadosDetailComponent } from './gamesDetail/preguntados-detail/preguntados-detail.component';
import { MayormenorDetailComponent } from './gamesDetail/mayormenor-detail/mayormenor-detail.component';
import { AboutComponent } from './about/about.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { GalaxyDetailComponent } from './gamesDetail/galaxy-detail/galaxy-detail.component';
import { RankingComponent } from './ranking/ranking.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    MenuComponent,
    WellcomeComponent,
    HomeComponent,
    AhorcadoDetailComponent,
    PreguntadosDetailComponent,
    MayormenorDetailComponent,
    WellcomeComponent,
    AboutComponent,
    GalaxyDetailComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenubarModule,
    AvatarModule,
    ButtonModule,
    DialogModule,
    TableModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
