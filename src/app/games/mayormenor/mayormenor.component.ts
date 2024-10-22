import { Component } from '@angular/core';
import { CardsService } from '../../core/cards.service';
import { Card } from '../../interfaces/carta.interface';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.css'
})
export class MayormenorComponent {

  cartas: Card[] = [];
  blockedDocument: boolean = false;
  suscription!: Subscription;
  puntos:number=0;
  vidas:number = 5

  constructor(private cardsService: CardsService, private messageService: MessageService, private router:Router) { }

  ngOnInit(): void {
    this.blockedDocument = true;
    this.suscription = this.cardsService.getCards()
      .pipe(
        finalize(() => {
          this.blockedDocument = false;
        }))
      .subscribe(
        data => { this.cartas = data; },
        error => { console.error('Error al cargar las cartas', error); }
      );
  }
  getCartaNueva() {
    this.blockedDocument = true;
    this.suscription = this.cardsService.getCard()
      .pipe(
        finalize(() => {
          this.blockedDocument = false;
        }))
      .subscribe(
        data => { this.cartas[1] = data; },
        error => { console.error('Error al cargar las cartas', error); }
      );
  }

  validarCartas(criterio: 'mayor' | 'menor') {
    const carta1 = this.cartas[0].numericValue;
    const carta2 = this.cartas[1].numericValue;

    if (carta1 === carta2) {
      this.mostrarToast('Son del mismo valor', 'Empate', 'info');
    } else if ((criterio == 'mayor' && carta1 < carta2) || (criterio == 'menor' && carta1 > carta2)) {
      this.mostrarToast('Sumaste 100 punto', 'Correcto', 'success');
      this.puntos+=100;
    } else {
      this.mostrarToast('Perdiste una vida', 'Incorrecto', 'error');
      this.vidas--;
      if(this.vidas==0) this.rankear();
    }

    this.cartas[0] = this.cartas[1];
    this.getCartaNueva();
  }
  rankear(){
    this.router.navigate(['/home/ranking/4/'+this.puntos]);
  }

  mostrarToast(mensaje: string, titulo: string, tipo: 'info' | 'success' | 'error') {
    this.messageService.add({ severity: tipo, summary: titulo, detail: mensaje, life: 1000 });
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
