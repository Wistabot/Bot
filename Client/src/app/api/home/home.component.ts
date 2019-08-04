import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService,public router: Router) { }

  role
  
  ngOnInit() {
    this.role = this.auth.userRole()
    this.reload()
  }

  reload(){
    
      if (! localStorage.justOnce) {
          localStorage.setItem("justOnce", "true");
          window.location.reload();
      }
  
  }
}
