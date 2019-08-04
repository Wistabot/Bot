import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UsersComponent } from './api/admin/users/users.component';
import { EditUserComponent } from './api/admin/edit-user/edit-user.component';
import { AdminComponent } from './api/admin/admin/admin.component';
import { CoursesComponent } from './api/admin/courses/courses.component';
import { EditCourseComponent } from './api/admin/courses/edit-course.component';
import { GetallquestionsComponent } from './api/admin/getquestions/getallquestions/getallquestions.component';
import { GetunansweredquestionsComponent } from './api/admin/getquestions/getunansweredquestions/getunansweredquestions.component';
import { SuggestionsComponent } from './api/admin/suggestions/suggestions.component';

import { TeachmeComponent } from './api/teachme/teachme.component';
import { AboutComponent } from './api/about/about.component';
import { AcademicPoliciesComponent } from './api/policies/academics.component';
import { WistaPoliciesComponent } from './api/policies/policies.component';
import { UserDetailsComponent } from './api/mydetails/user-details.component';
import { SemesterOneDetailsComponent } from './api/courses/semesterone-details.component';
import { SemesterTwoDetailsComponent } from './api/courses/semestertwo-details.component';
import { SemesterThreeDetailsComponent } from './api/courses/semesterthree-details.component';
import { SemesterFourDetailsComponent } from './api/courses/semesterfour-details.component';
import { SemesterFiveDetailsComponent } from './api/courses/semesterfive-details.component';
import { SemesterSixDetailsComponent } from './api/courses/semestersix-details.component';
import { HomeComponent } from './api/home/home.component';

import { AuthGuardService } from './authentication/auth-guard.service';
import { AdminGuardService } from './api/admin/admin-guard.service';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
      { path: 'academicsPolicy', component: AcademicPoliciesComponent },  
      { path: 'teachBot', component: TeachmeComponent }, 
      { path: 'wistaPolicy', component: WistaPoliciesComponent },  
      { path: 'about', component: AboutComponent },
      { path: 'userDetails', component: UserDetailsComponent },
      { path: 'semOne', component: SemesterOneDetailsComponent },
      { path: 'semTwo', component: SemesterTwoDetailsComponent },
      { path: 'semThree', component: SemesterThreeDetailsComponent },
      { path: 'semFour', component: SemesterFourDetailsComponent },
      { path: 'semFive', component: SemesterFiveDetailsComponent },
      { path: 'semSix', component: SemesterSixDetailsComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService], children: [
        { path: 'users', component: UsersComponent },
        { path: 'courses', component: CoursesComponent },
        { path: 'editCourse/:userId', component: EditCourseComponent },
        { path: 'edit/:userId', component: EditUserComponent },
        { path: 'getAllQns', component: GetallquestionsComponent },
        { path: 'getUnAnsQns', component: GetunansweredquestionsComponent },
        { path: 'showSuggestions', component: SuggestionsComponent },
        

      ]},
  ]}
]

export const appRouting = RouterModule.forRoot(appRoutes);
