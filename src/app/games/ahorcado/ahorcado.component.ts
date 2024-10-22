import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  public listaLetras: string[];
  public listaLetrasUsadas: string[];
  public palabraSecreta: string[] = [];
  public cantLetrasFallidas: number;
  private palabrasAhorcado: string[] = [
    'manzana',
    'elefante',
    'programacion',
    'desarrollo',
    'javascript',
    'angular',
    'computadora',
    'juego',
    'musica',
    'pelicula',
    'libro',
    'ventana',
    'telefono',
    'familia',
    'aventura',
    'ciencia',
    'matematica',
    'chocolate',
    'verano',
    'invierno',
    'fiesta'
  ];
  public puntaje: number = 0;

  //#region Variables de control para el modal
  public modalMessage: ModalParms;
  //#endregion

  constructor(private router:Router) {
    this.modalMessage = { visible: false, position: "top" } as ModalParms;
    this.listaLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.listaLetrasUsadas = [];
    this.palabraSecreta = this.palabrasAhorcado[this.rndNumber(0, 20)].toUpperCase().split('');
    this.cantLetrasFallidas = 0;
  }
  public estadoInicial(): void {

  }
  public probarLetra(event: string): void {
    console.log(event);
    console.log(this.listaLetrasUsadas);


    this.listaLetrasUsadas.push(event);
    if (!this.palabraSecreta.includes(event)){
      this.cantLetrasFallidas++;
    }else{
      for (var i = 0; i < this.listaLetrasUsadas.length; i++) {
        if (this.palabraSecreta.includes(this.listaLetrasUsadas[i])) this.puntaje += 100;
      }
    }

    if (this.cantLetrasFallidas >= 5) {
      this.openModal("Fin del juego", "La palabra secreta es: " + this.palabraSecreta.join('') + "<br> Tu puntaje es: " + this.puntaje + " pts")
    }
    if (this.palabraSecreta.every(x => this.listaLetrasUsadas.includes(x))) {
      this.openModal("Felicitaciones", "¡Ganaste el juego!<br><br>Tu puntaje es: " + this.puntaje + " pts");
    }

  }
  public estaUsada(event: string): boolean {
    return this.listaLetrasUsadas.includes(event);
  }
  public esLetraEncontrada(event: string): boolean {
    return this.listaLetrasUsadas.includes(event);
  }
  private openModal(titulo: string, mensaje: string): void {
    this.modalMessage.visible = true;
    this.modalMessage.title = titulo;
    this.modalMessage.message = mensaje;
  }
  rndNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  rankear(){
    this.modalMessage.visible =false;
    this.router.navigate(['/home/ranking/2/'+this.puntaje]);
  }
}

export interface ModalParms {
  visible: boolean;
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright";
  title: string;
  message: string;
}