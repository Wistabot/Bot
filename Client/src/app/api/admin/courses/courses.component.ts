import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  users:any;
  private getUsersUrl = environment.path+"/courses/courses";
  constructor(private _http: HttpClient) { }
  

  ngOnInit() {
    this.getUsersOnload();
    }

  goToLink(url: string){
    //window.open(url, "_blank");
    var wihe = 'width='+screen.availWidth+',height='+screen.availHeight;
   // window.open(url, "learning material", "width=640,height=480");
   window.open(url, "learning material","screenX=1,screenY=1,left=1,top=1," + wihe);
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
