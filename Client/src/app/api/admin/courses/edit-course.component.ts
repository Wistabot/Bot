import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  user
  private getUsersUrl = environment.path+"/courses/edit/";
  subject
  unit
  userData = new FormGroup ({
    url: new FormControl(Validators.required)
  })
  constructor(private route: ActivatedRoute, private _http: HttpClient, private router: Router) { }
id
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id=params["userId"];
        this.getUser(params["userId"]).subscribe(
          restItems => {
            this.user = restItems;
            this.userData.setValue({
              url: this.user.url
            });
            
          }
        )
      }
    );
  }

 
  getUser(id) {
    return this._http
      .get<any[]>(this.getUsersUrl+id)
      .pipe(map(data => data));
  }

  updateUser() {
    this._http.patch(this.getUsersUrl+this.id+'/', this.userData.value).subscribe(()=> {console.log("added"+this.id);})
    this.router.navigate(['/home/admin/courses'])
   
  }
}

