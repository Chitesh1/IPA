import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient,HttpHeaders }from '@angular/common/http';
import {UserService} from '../user.service';
@Component({
  selector: 'userlogin-component',
  templateUrl: './userlogin-component.component.html',
  styleUrls: ['./userlogin-component.component.css']
})
export class UserloginComponentComponent implements OnInit {
cookieval:String= [];
full:Array=[];
users=[];
email:string = "";
name:string = "";
phone:string = "";
fulllink:string = "";
editHero: Hero;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
    constructor(private http: HttpClient,private userservice: UserService) { 
}

  ngOnInit() {
 
   this.userservice.getLocalApi().subscribe(data=>{this.users=data});

  }
 submitData(data)
 {
   this.name=data.name;
   this.email=data.email;
   this.phone=data.phone;
  
   this.fulllink = "?name="+this.name+"&&email="+this.email+"&&phone="+this.phone;
   this.http.post("http://localhost/customapi/index.php"+this.fulllink).subscribe(data=>{console.log(data)},error=>{alert("Data Has Been Inserted");});
   
   localStorage.setItem('CustomerDetailUser',data.name);
   localStorage.setItem('CustomerDetailEmail',data.email);
   localStorage.setItem('CustomerDetailAddress',data.address);
   localStorage.setItem('CustomerDetailPhone',data.phone);
   sessionStorage.setItem('CustomerDetailUser',data.name);
   sessionStorage.setItem('CustomerDetailEmail',data.email);
   sessionStorage.setItem('CustomerDetailAddress',data.address);
   sessionStorage.setItem('CustomerDetailPhone',data.phone);
   this.cookieval=localStorage.getItem('CustomerDetailPhone');
   //console.log(this.cookieval);  

}
  
}
