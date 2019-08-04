import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  private getUsersUrl = environment.path+"/teachMe/getAllSuggestions";
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
