import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


export const ROUTES:Routes=[
    {path:'', component: HomeComponent},
    {path:'callback',component:CallbackComponent},
    {path:'profile',component:ProfileComponent},
    { path: '**', redirectTo: '' }
]
