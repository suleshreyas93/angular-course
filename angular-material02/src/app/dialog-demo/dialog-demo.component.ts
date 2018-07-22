import { Component, OnInit } from '@angular/core';
import { MatDialog}  from '@angular/material';
import { MydialogComponent } from '../mydialog/mydialog.component';

@Component({
  selector: 'dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MydialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

}
