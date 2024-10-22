
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData,query, Firestore, orderBy, where } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  public rankingCollection:any[]=[];
  private sub: Subscription | null = null;
  constructor(private fireStore:Firestore,private authService:AuthService) { }

  setRegistro(juego:number,puntaje:number, userEmail:string){
    let col = collection(this.fireStore, 'ranking');

    let obj = {juego, usuario: userEmail, fecha: new Date(), puntaje}

    addDoc(col, obj);
  }
  getRegistros(juego:number): Observable<any[]>{
    let col = collection(this.fireStore, 'ranking');

    // Crear la consulta con ordenamiento por puntaje (descendente) y fecha (ascendente)
    const rankingQuery = query(
      col,
      where("juego","==",juego),
      orderBy('puntaje', 'desc'),
      orderBy('fecha', 'asc')   
    );

    return collectionData(rankingQuery);

  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
