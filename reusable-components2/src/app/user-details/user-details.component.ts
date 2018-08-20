import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from './../services/app.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource();
  displayedColumns = [];
  constructor(private service: AppService) { }

  ngOnInit() {

    this.service.getAllUsers().subscribe(users => {
      console.log("HI");
      let columnNames = Object.keys(users[0]);
      console.log(columnNames);
      for(let i = 0; i < columnNames.length; i++)
      {
        this.displayedColumns.push(columnNames[i]);
      }

      console.log("Columns = "+this.displayedColumns);
      this.dataSource.data = users;
    });
  }

}
