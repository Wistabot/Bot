import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment'
import "rxjs/add/operator/map";


@Injectable()
export class AuthService {

    path = environment.path + '/authentication'

    TOKEN_KEY = 'token'
    USER_DATA = 'payload'
    

    errorText

    constructor( private http: HttpClient, private router: Router ) {}


    logout() {
        localStorage.removeItem(this.TOKEN_KEY)
        localStorage.removeItem(this.USER_DATA)
        localStorage.removeItem('justOnce')
        this.router.navigate(['/login'])
    }

    registerUser(registerData) {
        this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
            this.loginAction(res)
        },
        err => {
            console.log(err.error.message)
            this.errorText = err.error.message
        })
    }   

    loginUser(loginData) {
        this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
            this.loginAction(res)
        },
        err => {
            console.log(err.error.message)
            this.errorText = err.error.message
        })
    }

    loginAction(data) {
        this.errorText = null
        localStorage.setItem(this.USER_DATA, data.name)
        localStorage.setItem(this.TOKEN_KEY, data.token)
       
        this.router.navigate(['/home'])
    }
    
    isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    name() {
        return localStorage.getItem(this.USER_DATA)
    }

    userRole() {
        return this.http.get<any>(this.path + '/role/').map(res => {
            return res.role
        })
    }

}
