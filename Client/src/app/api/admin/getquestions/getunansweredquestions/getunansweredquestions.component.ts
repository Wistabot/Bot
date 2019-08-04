import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-getunansweredquestions',
  templateUrl: './getunansweredquestions.component.html',
  styleUrls: ['./getunansweredquestions.component.css']
})
export class GetunansweredquestionsComponent implements OnInit {
  private getUsersUrl = environment.path+"/queries/getUnansweredQuestion";
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
