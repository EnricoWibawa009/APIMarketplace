import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './sidebarAPI.component.html',
  styleUrls: ['./sidebarAPI.component.css']
})
export class SidebarComponent {
  title = 'sidebarAPI';
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SubscribeComponent, {
      height: '562px',
      width: '640px'
    });
  }
  
}

@Component({
  selector: 'subscribe',
  templateUrl: './../subscribe/subscribe.component.html',
})
export class SubscribeComponent {
  constructor(
    public dialogRef: MatDialogRef<SubscribeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SidebarComponent,
    public dialog: MatDialog
    ) {}

  

  openDialogBill() {
    this.dialog.open(BillingComponent, {
      height: '562px',
      width: '950px'
    },);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'billing',
  templateUrl: './../billing/billing.component.html',
})
export class BillingComponent {
  constructor(
    public dialogRef: MatDialogRef<BillingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BillingComponent,
    public dialog: MatDialog) {}

    openDialogBack() {
      this.dialog.open(SubscribeComponent, {
        height: '562px',
        width: '640px'
      });
      this.dialogRef.close();
    }
    
    onNoClick(): void {
      this.dialogRef.close();
    }
}