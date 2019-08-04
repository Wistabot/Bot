import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  
})
export class UserDetailsComponent implements OnInit {
  
  users:any;
  private getUsersUrl = environment.path+"/admin/users/getUserDetails/";
  constructor(private _http: HttpClient) { }
  

  ngOnInit() {
    this.getUsersOnload();
    
     
  }

getUsersOnload(){
  this.getUser().subscribe(
    restItems => {
      this.users = restItems;
     // console.log(this.users);
    }
  )
}
getUser() {
  return this._http
    .get<any[]>(this.getUsersUrl)
    .pipe(map(data => data));
}

}
