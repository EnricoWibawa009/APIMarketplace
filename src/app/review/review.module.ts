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
export class ReviewModule {
  hide = true;
}