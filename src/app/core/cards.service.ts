import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Card, DeckResponse } from '../interfaces/carta.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardValueMap: { [key: string]: number } = {
    'ACE': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'JACK': 11,
    'QUEEN': 12,
    'KING': 13,
  };
  constructor(private http: HttpClient) {

  }

  public getCards(): Observable<Card[]> {
    return this.http.get<DeckResponse>('https://www.deckofcardsapi.com/api/deck/new/draw/?count=2')
    .pipe(
      map(response => response.cards.map(card => ({
        ...card,
        numericValue: this.cardValueMap[card.value]
      })))
    );
  }
  public getCard(): Observable<Card> {
    return this.http.get<DeckResponse>('https://www.deckofcardsapi.com/api/deck/new/draw/?count=1')
    .pipe(
      map(response => {
        const card = response.cards[0];
        return {
          ...card,
          numericValue: this.cardValueMap[card.value] 
        }
      }));
  }
}