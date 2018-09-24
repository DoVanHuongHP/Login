import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';


export const ROUTES:Routes=[
    {path:'', component: HomeComponent},
    {path:'callback',component:CallbackComponent},
    { path: '**', redirectTo: '' }
]
