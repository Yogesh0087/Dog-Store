import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../products.service';
//

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private api:string = "/assets/data.json";
  
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }
   

  login(formData)
  {
    console.log(formData);
    this.http.post("",formData).subscribe(
      res=>{
        console.log(res);
      }
    );
  }



  
 
}
