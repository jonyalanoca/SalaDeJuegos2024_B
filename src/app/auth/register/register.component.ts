import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { confirmarClaveValidator } from './clave.validator';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public formulario: FormGroup;

  //#region Variables de control para el modal
  public modalMessage: ModalParms;
  //#endregion
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.modalMessage = { visible: false, position: "top" } as ModalParms;
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: confirmarClaveValidator()
      }
    );
  }
  private openModal(titulo: string, mensaje: string): void {
    this.modalMessage.visible = true;
    this.modalMessage.title = titulo;
    this.modalMessage.message = mensaje;
  }

  registrar() {
    this.formulario.markAllAsTouched();
    const email = this.formulario.get('email')?.value;
    const password = this.formulario.get('password')?.value;
    
    if (this.formulario.valid) {
      this.authService.registerUser(email, password).then(result => {
        if (result.user.email !== null) {

          const currentUser = this.authService.getLoggedInUser();
          console.log(currentUser);
          this.router.navigate(['/login']);
          this.openModal('Registro valido', 'Se registro el usuario con exito.');
        }
      })
        .catch(error => {
          switch (error.code) {
            case "auth/invalid-email":
              this.openModal('Fallo el Registro', 'Correo electrónico inválido.');
              break;
            case "auth/email-already-in-use":
              this.openModal('Fallo el Registro', 'El correo electrónico ya está en uso.');
              break;
            case "auth/weak-password":
              this.openModal('Fallo el Registro', 'La contraseña es demasiado débil.');
              break;
            case "auth/operation-not-allowed":
              this.openModal('Fallo el Registro', 'El registro de usuarios con correo electrónico y contraseña no está habilitado.');
              break;
            default:
              this.openModal('Error desconocido', error.message);
          }
        });
    }
  }
}
export interface ModalParms {
  visible: boolean;
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright";
  title: string;
  message: string;
}
