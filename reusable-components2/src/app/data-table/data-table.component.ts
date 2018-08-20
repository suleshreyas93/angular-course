import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from './../services/app.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';


@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input("data-source") dataSource = new MatTableDataSource();
  @Input("columns") displayedColumns = [];
  constructor(private service: AppService) { }

  ngOnInit() {

    this.service.getAllPosts().subscribe(posts => {
      console.log(posts);
      let columnNames = Object.keys(posts[0]);
      console.log(columnNames);
      for(let i = 0; i < columnNames.length; i++)
      {
        this.displayedColumns.push(columnNames[i]);
      }

      console.log("Columns = "+this.displayedColumns);
      this.dataSource.data = posts;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any):void{
    console.log(row);
  }

}
 