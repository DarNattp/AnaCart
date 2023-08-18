import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AnaBodyComponent } from './ana-body/ana-body.component';
import { AnaCardsComponent } from './ana-cards/ana-cards.component';
import { AnaCarouselComponent } from './ana-carousel/ana-carousel.component';
import { AnaPageNotFoundComponent } from './ana-page-not-found/ana-page-not-found.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

const routes: Routes = [
  
  {
    path:'',
    component:AnaCarouselComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'cards',
    component:AnaCardsComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'cart',
    component:CartComponentComponent,
  },
  {
    path:'Details',
    component:DetailsComponentComponent,
  },
  {
    path:'carousel',
    component:AnaCarouselComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'specialpage',
    component:AnaBodyComponent,
  },
  {
    path:'signup',
    component:SignupComponentComponent,
  },
  { 
  path: '', 
  redirectTo: 'settings', 
  pathMatch: 'full' },
  {
    path:'settings',
    component:SettingsComponentComponent,
  },
  {
    path:'setting/:id',component: DetailsComponent
  },

  {
    path:'**',
    component:AnaPageNotFoundComponent,
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
