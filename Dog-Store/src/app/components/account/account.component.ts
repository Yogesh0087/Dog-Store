import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  ProductsArr : Array<any>
  constructor(private products : ProductsService) { }

  ngOnInit(): void {
  }

}
