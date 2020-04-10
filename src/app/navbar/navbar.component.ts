import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'test-app';
  panelOpenState = false;
}
