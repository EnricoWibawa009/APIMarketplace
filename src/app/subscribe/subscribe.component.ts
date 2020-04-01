import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  title = 'test-sub';
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  openDialogBill() {
    this.dialog.open(BillingComponent, {
      height: '562px',
      width: '950px'
    });
  }
}

@Component({
  selector: 'billing',
  templateUrl: './billing/billing.component.html',
})
export class BillingComponent {
  constructor(
    public dialogRef: MatDialogRef<BillingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BillingComponent) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

