import { Component } from '@angular/core';

@Component({
  selector: 'app-mayormenor-detail',
  templateUrl: './mayormenor-detail.component.html',
  styleUrl: './mayormenor-detail.component.css'
})
export class MayormenorDetailComponent {
  public visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
