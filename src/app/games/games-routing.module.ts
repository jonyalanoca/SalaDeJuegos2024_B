import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { guardGuard } from '../core/guard.guard';

const routes: Routes = [
  { path: 'ahorcado', component: AhorcadoComponent, canActivate: [guardGuard] },
  { path: 'preguntados', component: PreguntadosComponent, canActivate: [guardGuard] },
  { path: 'mayorMenor', component: MayormenorComponent, canActivate: [guardGuard] },
  { path: 'galaxy', component: GalaxyComponent, canActivate: [guardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
