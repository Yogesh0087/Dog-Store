import { Product } from './Interface/products.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore,} from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Injectable()
export class ProductsService {

  private api:string = "/assets/data.json";

  private _login = "";




  constructor(private http : HttpClient) { }

  getAllProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.api);
       
  }


  login( input : HTMLInputElement) 
  {
    let login = {  };
    this.http.post( this.api, login)
    .subscribe(response=>{
      console.log(response);
    });


    
  }  
  

 
   
 
  //{
    //return this.http.post<any>(this._signup, form)
  //}



  

//registerUser(user)
//{
  //return this.http.post<any>(this._registerUrl,user);
//}

  //

}
