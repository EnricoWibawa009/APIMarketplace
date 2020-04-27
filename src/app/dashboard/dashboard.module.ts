import { NgModule } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginRoutes } from './../login/login.routing';

@NgModule({
    imports: [],
    declarations: [FooterComponent,
    HeaderComponent,],
    bootstrap: [ ]
  })
  export class DashBoardModule {
    hide = true;
   }