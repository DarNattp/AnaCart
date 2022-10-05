import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnaBodyComponent } from './ana-body/ana-body.component';
import { AnaCardsComponent } from './ana-cards/ana-cards.component';
import { AnaCarouselComponent } from './ana-carousel/ana-carousel.component';
import { AnaPageNotFoundComponent } from './ana-page-not-found/ana-page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:AnaCarouselComponent,
  },
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'about',
        component:AboutComponent,
  
      }
    ]
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
    path:'**',
    component:AnaPageNotFoundComponent,
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
