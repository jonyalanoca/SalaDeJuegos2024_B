import { Component } from '@angular/core';
import { DragonBallService } from '../../core/dragon-ball.service';
import { MessageService } from 'primeng/api';
import { Character } from '../../interfaces/dragon-ball';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {

  blockedDocument: boolean = false;
  suscription!: Subscription;

  personajes: Character[] = [];
  personajeSeleccionado: Character = {} as Character;
  preguntaValidador: string = '';
  puntos:number = 0;
  vidas:number = 5;
  constructor(private dragonBallService: DragonBallService,private messageService: MessageService, private router:Router) { }
  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters(){
    this.blockedDocument = true;
    this.suscription = this.dragonBallService.getCharacters()
      .pipe(
        finalize(() => {
          this.blockedDocument = false;
        }))
      .subscribe(
        result => { 
          this.personajes = result; 
          this.personajeSeleccionado = this.personajes[this.dragonBallService.rndNumber(0, 2)];
          this.getPregunta();
        },
        error => { console.error('Error al cargar las cartas', error); }
      );
  }
  evaluarRespuesta(respuesta: Character) {
    if (this.personajeSeleccionado == respuesta){
      this.mostrarToast('Sumaste 100 punto', 'Correcto', 'success');
      this.puntos+= 100;
    }
    else{
      this.mostrarToast('Perdiste una vida', 'Incorrecto', 'error');
      this.vidas--;
      if(this.vidas ==0) this.rankear();
    }
    this.getCharacters();

  }
  getPregunta() {
    var opcion = this.dragonBallService.rndNumber(1, 3);
    switch (opcion) {
      case 1:
        this.preguntaValidador = '¿Quién es ' + this.personajeSeleccionado.name + '?';
        break;
      case 2:
        this.preguntaValidador = '¿Quién tiene un KI de  ' + this.personajeSeleccionado.ki + '?';
        break;
      case 3:
        this.preguntaValidador = '¿A quién corresponde esta descripción: ' + this.personajeSeleccionado.description + '?';
        break;
    }    
  }
  mostrarToast(mensaje: string, titulo: string, tipo: 'info' | 'success' | 'error') {
    this.messageService.add({ severity: tipo, summary: titulo, detail: mensaje, life: 1000 });
  }
  rankear(){
    this.router.navigate(['/home/ranking/4/'+this.puntos]);
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
