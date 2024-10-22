import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  public emailUser: string | null= null;
constructor(private authService:AuthService,private router:Router){
    var user= authService.getLoggedInUser();
    if(user){
        this.emailUser =user.email;

    }
    
}
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
  goLogin(){
    this.router.navigate(['/login']);
  }
  logOut(){

    this.authService.logoutUser().then(() => {
        var user= this.authService.getLoggedInUser();
        this.emailUser = user ? user.email : null;
 
        this.router.navigate(['/home']); 
      }).catch(error => {
        alert('Error al cerrar sesión: '+ error);
      });
  }
}
