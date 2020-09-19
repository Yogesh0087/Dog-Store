import { FormsModule } from '@angular/forms';
//import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerUserData = {};
  constructor( ) { }

  ngOnInit(): void {
  }

  registerUser(fa)
  {
    console.log(fa);

    this.registerUserData = fa;

    

    
  }

  //signup(f)
  //{
    
  //}

  //signup(f)
  //{

  //}

  

}
