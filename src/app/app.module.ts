import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnaCardsComponent } from './ana-cards/ana-cards.component';
import { CardModule } from 'primeng/card';
import { AnaCarouselComponent } from './ana-carousel/ana-carousel.component';
import { AnaBodyComponent } from './ana-body/ana-body.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AnaPageNotFoundComponent } from './ana-page-not-found/ana-page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../environments/material.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CardDetailsService } from './services/card-details.service';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { AnaheaderComponent } from './anaheader/anaheader.component';
import { AnafooterComponent } from './anafooter/anafooter.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    AnaCardsComponent,
    AnaCarouselComponent,
    AnaBodyComponent,
    AboutComponent,LoginComponent, AnaPageNotFoundComponent, DetailsComponentComponent, CartComponentComponent, SettingsComponentComponent,SignupComponentComponent, AnaheaderComponent, AnafooterComponent,LoginComponent, EmailValidatorDirective, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,CardModule, BrowserAnimationsModule,FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [CardDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
