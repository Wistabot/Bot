import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { AboutComponent } from './about/about.component';
import { AcademicPoliciesComponent } from './policies/academics.component';
import { WistaPoliciesComponent } from './policies/policies.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './mydetails/user-details.component';
import { SemesterOneDetailsComponent } from './courses/semesterone-details.component';
import { SemesterTwoDetailsComponent } from './courses/semestertwo-details.component';
import { SemesterThreeDetailsComponent } from './courses/semesterthree-details.component';
import { SemesterFourDetailsComponent } from './courses/semesterfour-details.component';
import { SemesterFiveDetailsComponent } from './courses/semesterfive-details.component';
import { SemesterSixDetailsComponent } from './courses/semestersix-details.component';
import { TeachmeComponent } from './teachme/teachme.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AdminModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    AcademicPoliciesComponent,
    WistaPoliciesComponent,
    HomeComponent,
    UserDetailsComponent,
    SemesterOneDetailsComponent,
    SemesterTwoDetailsComponent,
    SemesterThreeDetailsComponent,
    SemesterFourDetailsComponent,
    SemesterFiveDetailsComponent,
    SemesterSixDetailsComponent,
    TeachmeComponent
  ],
  providers: [
    ApiService,
  ],
})
export class ApiModule { }
