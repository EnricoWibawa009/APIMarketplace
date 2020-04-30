import { Component } from '@angular/core';
import { getParseTreeNode } from 'typescript';

export interface Section {
  rating: number;
  color: string;
  name: string;
  date: string;
  comment: string;
  // image: string;
}

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  hide = true;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;

  notes: Section[] = [
    {
      rating: 5,
      color: 'green',
      name: 'Robert Reed',
      date: 'December 27, 2019',
      comment: 'Lorem ipsum dolor sit amet conseqtetur adipsicing elit tempor dolor magna',
      // image: '',
    },
    {
      rating: 4,
      color: 'green',
      name: 'Susan Bingham',
      date: 'December 27, 2019',
      comment: 'Lorem ipsum dolor sit amet conseqtetur adipsicing elit tempor dolor magna',
    },
    {
      rating: 3,
      color: 'green',
      name: 'Jackblack Longnamous',
      date: 'December 27, 2019',
      comment: 'Lorem ipsum dolor sit amet conseqtetur adipsicing elit tempor dolor magna',
    },
    {
      rating: 5,
      color: 'green',
      name: 'David Roberts',
      date: 'December 27, 2019',
      comment: 'Lorem ipsum dolor sit amet conseqtetur adipsicing elit tempor dolor magna',
    },
  ];

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

