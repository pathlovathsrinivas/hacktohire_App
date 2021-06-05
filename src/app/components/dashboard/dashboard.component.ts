import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewEncapsulation } from '@angular/core';
import { book } from './booksModel';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['UUID', 'title', 'author', 'category','returned_date'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  bookDataSource: any = [];
  bookModel: book;
  constructor() { }
booksPick:any[]=[]
  ngOnInit(): void {
    this.booksPick=[
      {
        UUID:"100",
        title:"English",
        author:"somesh",
        category:"cse",
        returned_date:"08-06-2021"
      }, {
        UUID:"101",
        title:"Maths",
        author:"ramesh",
        category:"cse",
        returned_date:"08-06-2021"
      }, {
        UUID:"102",
        title:"computes",
        author:"vamshi",
        category:"cse",
        returned_date:"05-06-2021"
      }, {
        UUID:"103",
        title:"Electronics",
        author:"divya rai",
        category:"ece",
        returned_date:"15-06-2021"
      }, {
        UUID:"104",
        title:"material",
        author:"ajay",
        category:"Mech",
        returned_date:"14-06-2021"
      },
      {
        UUID:"105",
        title:"magnetics",
        author:"divya rai",
        category:"ece",
        returned_date:"18-06-2021"
      }
      ]
      this.bookModel = new book;
      this.bookDataSource = new MatTableDataSource();
      this.bookDataSource.data = this.booksPick;
      this.bookDataSource.sort = this.sort;
      this.bookDataSource.paginator = this.paginator;
  }
   // Quik search
   onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.bookDataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
