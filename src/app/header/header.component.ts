import { Component } from '@angular/core';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  status1: boolean = false;
  status2: boolean = false;


  clickEvent1(){
    this.status1 = !this.status1; 
    this.status2 = false;
   
  } 
  clickEvent2(){
    this.status2 = !this.status2;
    this.status1 = false;     
  }
}




