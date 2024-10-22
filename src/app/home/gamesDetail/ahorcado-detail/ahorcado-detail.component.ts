import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado-detail',
  templateUrl: './ahorcado-detail.component.html',
  styleUrl: './ahorcado-detail.component.css'
})
export class AhorcadoDetailComponent {
  public visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
