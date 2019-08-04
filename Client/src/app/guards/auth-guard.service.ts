import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
      if (this.auth.isAuthenticated()) {
        return true
      } else {
        this.router.navigate(['/login'])
        return false    
      }
  }

}
