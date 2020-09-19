
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  page = 4;

  constructor() { }

  ngOnInit(): void {
  }

}
