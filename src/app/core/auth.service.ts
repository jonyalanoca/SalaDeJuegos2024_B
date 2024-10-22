import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,User,signInWithEmailAndPassword  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: User | null = null;  
  constructor(private auth: Auth) {}

  //Registro
  registerUser(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(result => {
        return result;
      });
  }
    //  iniciar sesión
    loginUser(email: string, password: string): Promise<any> {
      return signInWithEmailAndPassword(this.auth, email, password)
        .then(result => {
          this.loggedInUser = result.user;  
          return result;
        });
    }
  
    
    getLoggedInUser(): User | null {
      return this.loggedInUser;
    }
  
    // Cerrar sesión
    logoutUser(): Promise<void> {
      return this.auth.signOut().then(() => {
        this.loggedInUser = null;  
      });
    }
}
