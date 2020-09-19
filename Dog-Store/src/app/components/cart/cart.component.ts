import { Cart } from './../cart/cart.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart : Cart) { }

  ngOnInit(): void {
  }

}
