import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankingService } from '../../core/ranking.service';
import { Timestamp } from '@angular/fire/firestore';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  public posiciones: Ranking[] = [];
  public modo: number;
  public score: number;
  public email: string;
  public nombreModo: 'Guerra de las galaxias' | 'El Ahorcado' | 'Preguntados' | 'Mayor o Menor' | null;
  constructor(private activatedRoute: ActivatedRoute, private rankingservice: RankingService, private authService: AuthService) {
    this.modo = +(activatedRoute.snapshot.paramMap.get('modo') ?? -1);
    this.score = +(activatedRoute.snapshot.paramMap.get('score') ?? -1);
    this.email = this.authService.getLoggedInUser()?.email ?? '';
    switch (this.modo) {
      case 1:
        this.nombreModo = 'Guerra de las galaxias';
        break;
      case 2:
        this.nombreModo = 'El Ahorcado';
        break;
      case 3:
        this.nombreModo = 'Preguntados';
        break;
      case 4:
        this.nombreModo = 'Mayor o Menor';
        break;
      default:
        this.nombreModo = null;
        break;
    }

  }
  ngOnInit() {
      if (this.score > -1) {
        this.rankingservice.setRegistro(this.modo, this.score, this.email);
      }

      this.rankingservice.getRegistros(this.modo).subscribe(result => {
        this.posiciones = result; // Asigna los registros obtenidos
      });

  }
  toDateTime(fecha: any) {
    return (fecha as Timestamp).toDate();
  }

}
export interface Ranking {
  fecha: {
    seconds: number;
    nanoseconds: number;
  };
  juego: number;
  puntaje: number;
  usuario: string;
}