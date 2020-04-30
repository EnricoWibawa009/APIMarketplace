import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {

  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;


  clickEvent1(){
    this.status1 = !this.status1; 
    this.status2 = false;
    this.status3 = false;
    this.status4 = false;
    this.status5 = false;       
  } 
  clickEvent2(){
    this.status2 = !this.status2;
    this.status1 = false;
    this.status3 = false;
    this.status4 = false;
    this.status5 = false;       
  }
  clickEvent3(){
    this.status3 = !this.status3;   
    this.status2 = false;
    this.status1 = false;
    this.status4 = false;
    this.status5 = false;      
  }
  clickEvent4(){
    this.status4 = !this.status4;
    this.status2 = false;
    this.status1 = false;
    this.status3 = false;
    this.status5 = false;      
  }
  clickEvent5(){
    this.status5 = !this.status5;
    this.status2 = false;
    this.status1 = false;
    this.status4 = false;
    this.status3 = false;        
  }
  
}
  


