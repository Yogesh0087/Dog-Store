import { Cart } from './../cart/cart.model';
import { Routes } from '@angular/router';
import { ProductsService } from './../../products.service';
import { Product } from './../../Interface/products.interface';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  add :  number = -1 

 public Products = [
    //{ Name : "Tommy", Price : 100, Desc : "Good Dog" , ProductPath : "assets/Pics/dog1.jpg"},
    //{ Name : "Rock", Price : 200, Desc : "Friendly" , ProductPath : "assets/Pics/dog2.jpg"},
    //  { Name : "Brock", Price : 300, Desc : "Aggresive" , ProductPath : "assets/Pics/dog3.jpg"},
    //{ Name : "Hulk", Price : 400, Desc : "Nicest  Calm" , ProductPath : "assets/Pics/dog4.jpg"},
    //{ Name : "Hulk", Price : 500, Desc : "Nicest  Calm" , ProductPath : "assets/Pics/dog4.jpg"},
    //{ Name : "Hulk", Price : 600, Desc : "Nicest  Calm" , ProductPath : "assets/Pics/dog4.jpg"},
    //{ Name : "Hulk", Price : 700, Desc : "Nicest  Calm" , ProductPath : "assets/Pics/dog4.jpg"},


  
  ];
  constructor(private ps : ProductsService,private cart : Cart) { }

  ngOnInit(): void {

     this.ps.getAllProducts().subscribe(data => this.Products = data);
    // data => this.Products = data
  }

  //addToCart(index)
  //{
    //this.add = +index 
    //console.log('Added',this.Products[index]);

  //}

 // buy(amount)
  //{
    //  let selectedProduct = this.Products[this.add]
  
      //let data ={
        //name: selectedProduct.Name,
        //price:selectedProduct.Price,
        //amount : +amount
     // }
      //console.log(data)

      

    //}


    addProductToCart(Product : Product )
  {
    
    this.cart.addLine(Product);
   
    

  }



}
