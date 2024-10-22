import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AhorcadoDetailComponent } from './gamesDetail/ahorcado-detail/ahorcado-detail.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { PreguntadosDetailComponent } from './gamesDetail/preguntados-detail/preguntados-detail.component';
import { MayormenorDetailComponent } from './gamesDetail/mayormenor-detail/mayormenor-detail.component';
import { AboutComponent } from './about/about.component';
import { GalaxyDetailComponent } from './gamesDetail/galaxy-detail/galaxy-detail.component';
import { RankingComponent } from './ranking/ranking.component';
import { guardGuard } from '../core/guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: WellcomeComponent },
      { path: 'ahorcadoDetail', component: AhorcadoDetailComponent },
      { path: 'preguntadosDetail', component: PreguntadosDetailComponent },
      { path: 'mayorMenorDetail', component: MayormenorDetailComponent },
      { path: 'galaxyDetail',component:GalaxyDetailComponent},
      { path: 'about', component: AboutComponent },
      { path: 'ranking/:modo/:score', component: RankingComponent, canActivate: [guardGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
