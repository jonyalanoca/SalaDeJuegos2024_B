import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.css'
})
export class GalaxyComponent {
  timeLeft: number = 10;
  interval: any;
  intervalAlien: any;
  difucult: number = 1000;
  puntos: number = 0;
  color: string[] = [
    'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink',
    'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'brown', 'gray', 'black', 'white'
  ];

  constructor(private renderer: Renderer2, private el: ElementRef, private router:Router) { }

  ngOnInit() {
    this.sortearAlien();
    this.startTimer();
    this.startAlien();
  }
  killAlien() {
    this.sortearAlien();
    this.puntos += 100;

    clearInterval(this.intervalAlien);
    this.difucult -= 100;
    this.startAlien();
  }

  startAlien() {
    this.intervalAlien = setInterval(() => {
      if (this.timeLeft > 0) {
        this.sortearAlien();
      } else {
        this.stopTimer();
      }
    }, this.difucult);
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.rankear();        
        this.stopTimer();
      }
    }, 1000);
  }
  sortearAlien() {
    const alien = document.querySelector('.alien');
    this.renderer.setStyle(alien, 'top', this.rndNumber(0, 90) + '%');
    this.renderer.setStyle(alien, 'left', this.rndNumber(0, 90) + '%');
    this.renderer.setStyle(alien, 'fill', this.color[this.rndNumber(0, 16)]);
  }

  stopTimer() {
    clearInterval(this.interval);
    clearInterval(this.intervalAlien);
  }
  rndNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rankear(){
    this.router.navigate(['/home/ranking/1/'+this.puntos]);
  }
  ngOnDestroy() {
    this.stopTimer();
  }
}
