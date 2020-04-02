import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FooterComponent} from '../footer/footer.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BrowserModule,
      //BrowserAnimationsModule,
      BrowserAnimationsModule,
      MatRadioModule,
      MatExpansionModule,
      MatDividerModule,
      MatListModule,
      //MatCheckboxChange,
      MatCheckboxModule,
      MatSliderModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatButtonModule
    ],
    declarations: [FooterComponent],
    bootstrap: [ ]
  })
  export class DashBoardModule {
    hide = true;
  
   }