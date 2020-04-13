import { NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
  ],
  declarations: [
    FooterComponent,
    HeaderComponent],
  bootstrap: []
})

export class ReviewModule {
  hide = true;
}