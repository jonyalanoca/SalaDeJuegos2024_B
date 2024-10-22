import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/dragon-ball';
import { CharacterResponse } from '../interfaces/dragon-ball';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<CharacterResponse>('https://dragonball-api.com/api/characters?limit=58')
      .pipe(
        map((response: CharacterResponse) => this.get3characters(response.items))
      );
  }

  rndNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get3characters(personajes: Character[]) {
    var result: Character[] = [];
    do {
      var randomCharacter = personajes[this.rndNumber(0, personajes.length - 1)];
      if (!result.includes(randomCharacter)) {
        result.push(randomCharacter);
      }
    } while (result.length < 3);

    return result;
  }

}
