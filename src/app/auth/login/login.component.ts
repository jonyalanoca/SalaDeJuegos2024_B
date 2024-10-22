import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email: string | null;
  public pass: string | null;

  //#region Variables de control para el modal
  public modalMessage: ModalParms;
  //#endregion
  public defaultuser: DefaultUser[] = [
    { email: 'vegeta@gmail.com', pass: 'admin123' },
    { email: 'gohan@gmail.com', pass: 'admin123' },
    { email: 'dende@gmail.com', pass: 'admin123' }
  ];
  constructor(private authService: AuthService, private router: Router) {
    this.modalMessage = { visible: false, position: "top" } as ModalParms;
    this.email = null;
    this.pass = null;
  }

  ingresar() {
    //Validacion
    if (this.email == null || this.email == '' || this.pass == null || this.pass == '') {
      this.openModal('Datos invalidos', 'Son obligatorios la el email y la contraceña');
      return;
    }
    //Ingreso
    this.authService.loginUser(this.email!, this.pass!).then(result => {
      // Redirigir al usuario a la página principal o dashboard
      this.router.navigate(['/home']);
    })
      .catch(error => {

        switch (error.code) {
          case "auth/invalid-credential":
            this.openModal('Registro valido', 'Contraseña incorrecta.');
            break;
          case "auth/user-not-found":
            this.openModal('Registro valido', 'No se encontró el usuario.');
            break;
          case "auth/invalid-email":
            this.openModal('Registro valido', 'Correo electrónico inválido.');
            break;
          default:
            this.openModal('Error desconocido', error.message);
        }
      });
  }

  private openModal(titulo: string, mensaje: string): void {
    this.modalMessage.visible = true;
    this.modalMessage.title = titulo;
    this.modalMessage.message = mensaje;
  }
  public GetDefaultUser(index:number){
    this.email = this.defaultuser[index].email;
    this.pass = this.defaultuser[index].pass;
    this.ingresar();
  }
}
export interface ModalParms {
  visible: boolean;
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright";
  title: string;
  message: string;
}
export interface DefaultUser {
  email: string;
  pass: string;
}