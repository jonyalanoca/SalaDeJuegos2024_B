import { Component } from '@angular/core';

@Component({
  selector: 'app-galaxy-detail',
  templateUrl: './galaxy-detail.component.html',
  styleUrl: './galaxy-detail.component.css'
})
export class GalaxyDetailComponent {
  public visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
