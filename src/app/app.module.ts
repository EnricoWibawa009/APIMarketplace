import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderWeatherComponent } from './header_weatherAPI/header_weatherAPI.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ReviewComponent } from './review/review.component';
import { NavbarComponent } from './navbar/navbar.component';
import { APIDetailComponent } from './APIDetail/APIDetail.component';
// import { SidebarComponent } from './sidebarAPI.component';
// import { BillingComponent } from './sidebarAPI.component';
// import { SubscribeComponent } from './sidebarAPI.component';
import { Navbar2Component } from './navbar2/navbar2.component';
// import { SidebarComponent } from './sidebarAPI/sidebarAPI.component';
// import { BillingComponent } from './billing/billing.component';
// import { SubscribeComponent } from './subscribe/subscribe.component';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './sidebarAPI/sidebarAPI.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DocumentComponent } from './document/document.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'review', component:ReviewComponent},
  { path: 'discussion',  component:DiscussionComponent},
  { path: 'navbar',  component:NavbarComponent},
  { path: 'apiDetail',  component:SidebarComponent},
  { path: 'consumption',  component:ConsumptionComponent},
  { path: 'document',  component:DocumentComponent},
  { path: 'support',  component:SupportComponent},
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
    MarketplaceComponent,
    ReviewComponent,
    LoginComponent,
    NavbarComponent,
    Navbar2Component,
    APIDetailComponent,
    SidebarComponent,
    DiscussionComponent,
    ConsumptionComponent,
    DocumentComponent,
    SupportComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


