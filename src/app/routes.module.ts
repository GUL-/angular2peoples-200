import { NgModule } from '@angular/core';
import { RouterModule, RouterConfig } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/';
import { PeopleComponent } from './people/';
import { UpdateComponent } from './update/';

const ROUTES: RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'edit/:id', component: UpdateComponent},
];

export const RoutesModule = RouterModule.forRoot(ROUTES, {useHash: true});
