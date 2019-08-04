import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-getallquestions',
  templateUrl: './getallquestions.component.html',
  styleUrls: ['./getallquestions.component.css']
})
export class GetallquestionsComponent implements OnInit {
  private getUsersUrl = environment.path+"/queries/getAllQuestion";
  constructor(private _http: HttpClient) { }
data
  

  ngOnInit() {
    this.getUsersOnload()
  }
  getUsersOnload(){
    this._http
    .get<any[]>(this.getUsersUrl).subscribe(
      restItems => {
        this.data = restItems;
        
      }
    )
  }
}
