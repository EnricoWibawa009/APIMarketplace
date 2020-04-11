import { NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatSelectModule,
    MatListModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent],
  bootstrap: []
})
<<<<<<< HEAD
export class ReviewModule {
=======
export class NavbarModule {
>>>>>>> 5cb104ab91da4117a4e75b7d203206c56fc60d84
  hide = true;
}