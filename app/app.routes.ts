import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

export { ROUTES };
