import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './sidebarAPI.component.html',
  styleUrls: ['./sidebarAPI.component.css']
})
export class SidebarComponent {
  title = 'test-app';
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SubscribeComponent, {
      height: '562px',
      width: '630px'
    });
  }
  
}

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe/subscribe.component.html',
})
export class SubscribeComponent {
  constructor(
    public dialogRef: MatDialogRef<SubscribeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SidebarComponent) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}