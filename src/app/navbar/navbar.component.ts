import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'test-app';
  panelOpenState = false;
}
