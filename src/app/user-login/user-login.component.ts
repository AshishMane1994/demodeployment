import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }
  data1:any=[]
  data(val:any){
    console.log(val)
   this.data1=val

  }

  ngOnInit(): void {
  }

}
