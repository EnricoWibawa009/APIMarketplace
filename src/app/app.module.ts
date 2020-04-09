import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderWeatherComponent } from './header_weatherAPI/header_weatherAPI.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component:LoginComponent},
  { path: 'marketplace', component:MarketplaceComponent},
  { path: 'navbar', component:NavbarComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderWeatherComponent,
    DashboardComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


