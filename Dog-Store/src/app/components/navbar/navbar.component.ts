import { Cart } from './../cart/cart.model';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isOpen : boolean = false;

  toggleNavBar()
  {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
