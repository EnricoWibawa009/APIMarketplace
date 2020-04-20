import { Component } from '@angular/core';
import { getParseTreeNode } from 'typescript';

export interface Section {
  rating: number;
  color: string;
  name: string;
  date: string;
  comment: string;
}

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  hide = true;


  notes: Section[] = [
    {
      rating: 5,
      color: 'green',
      name: 'Robert Reed',
      date: 'December 27, 2019',
      comment: 'Lorem ipsum dolor sit amet conseqtetur adipsicing elit tempor dolor magna',
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
    // {
    //   rating: 2,
    //   color: 'green',
    //   name: 'David Roberts',
    //   date: 'December 27, 2019',
    //   comment: 'Bad',
    // },
    // {
    //   rating: 3,
    //   // if(rating: 5) {
    //   //   color: 'green';
    //   // },
    //   // else {
    //   //   color: 'red';
    //   // },
    //   color: 'green',
    //   name: 'Debby Moran',
    //   date: 'December 27, 2019',
    //   comment: 'Lorem ipsum dolor sit amet conseqtetur adipsicing elit tempor dolor magna',
    // }
  ];
}

