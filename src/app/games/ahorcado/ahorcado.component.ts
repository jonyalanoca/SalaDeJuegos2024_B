import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  public listaLetras: string[];
  public listaLetrasUsadas: string[];
  public palabraSecreta: string[];
  public cantLetrasFallidas: number;

  //#region Variables de control para el modal
  public modalMessage: ModalParms;
  //#endregion

  constructor() {
    this.modalMessage = { visible: false, position: "top" } as ModalParms;
    this.listaLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.listaLetrasUsadas = [];
    this.palabraSecreta = ['J', 'O', 'N', 'A', 'T', 'H', 'A', 'N'];
    this.cantLetrasFallidas = 0;
  }
  public estadoInicial():void{

  }
  public probarLetra(event: string): void {
    this.listaLetrasUsadas.push(event);
    if (!this.palabraSecreta.includes(event))
      this.cantLetrasFallidas++;

    if (this.cantLetrasFallidas >= 5){
      this.openModal("Fin del juego", "La palabra secreta es: " + this.palabraSecreta.join(''))
    }
    if(this.palabraSecreta.every(x=> this.listaLetrasUsadas.includes(x))){
      this.openModal("Felicitaciones", "¡Ganaste el juego!<br><br>Tu puntaje es: 123456789 pts");
    }

  }
  public estaUsada(event: string): boolean {
    return this.listaLetrasUsadas.includes(event);
  }
  public esLetraEncontrada(event: string): boolean {
    return this.listaLetrasUsadas.includes(event);
  }
  private openModal(titulo: string, mensaje: string): void {
    this.modalMessage.visible=true;
    this.modalMessage.title=titulo;
    this.modalMessage.message = mensaje;
  }
}

export interface ModalParms {
  visible: boolean;
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright";
  title: string;
  message: string;
}