import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teachme',
  templateUrl: './teachme.component.html',
  styleUrls: ['./teachme.component.css']
})
export class TeachmeComponent implements OnInit {
  private saveUrl = environment.path+"/teachMe/save";
  constructor(private http: HttpClient, private router: Router) { }
  teachMeForm = new FormGroup ({
    question: new FormControl(),
    answer: new FormControl(),
    explanation: new FormControl()
  });
  ngOnInit() {
    
  }
  register() {
    console.log(this.teachMeForm.value)
    
      return this.http.post(this.saveUrl, this.teachMeForm.value).subscribe(res => {
        console.log(res)
        this.router.navigate(['/home'])
    },err=> {
      console.log(err.error.message)
      
  })
    
  }

}
