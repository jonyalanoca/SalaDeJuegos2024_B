import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink:'/'
          },
          {
              label: 'Juegos',
              icon: 'pi pi-play',
              items:[
                {
                    label:'Ahocado',
                    icon:'pi pi-discord',
                    routerLink:'ahorcadoDetail'
                },
                {
                    label:'Mayor o Menor',
                    icon:'pi pi-discord',
                    routerLink:'mayorMenorDetail'
                },
                {
                    label:'Preguntados',
                    icon:'pi pi-discord',
                    routerLink:'preguntadosDetail'
                },
                {
                    label:'Galaxy',
                    icon:'pi pi-discord',
                    routerLink:'galaxyDetail'
                }
              ]
          },
          {
              label: 'Acerca de',
              icon: 'pi pi-user',
              routerLink:'about'        
          }
      ];
  }
}
