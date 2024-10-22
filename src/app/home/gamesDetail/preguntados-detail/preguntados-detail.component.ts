import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntados-detail',
  templateUrl: './preguntados-detail.component.html',
  styleUrl: './preguntados-detail.component.css'
})
export class PreguntadosDetailComponent {
  public visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
