import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    path = environment.path + '/data'
    users = []

    getUsers() {
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res
        })
    }

}
