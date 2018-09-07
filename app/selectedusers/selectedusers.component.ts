import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'selectedusers',
  templateUrl: './selectedusers.component.html',
  styleUrls: ['./selectedusers.component.css']
})
export class SelectedusersComponent implements OnInit {

  href= "";
  id="";
  name="";
  link="";
  id:string="";
  private selectedid: string=[];
    constructor(private userservice:UserService,private router:Router,private http:HttpClient ) { }

  ngOnInit() {
   this.href = this.router.url;
   this.id=this.href.substring(14);
   //console.log(this.id);
   this.http.get("http://localhost/customapi/get.php"+this.id).subscribe(data=>{this.selectedid = data as string[];console.log(this.selectedid)});
  }
   submitData(data){
     this.id=this.href.substring(15);
     this.name=data.name;
     this.link = "?name="+data.name+"&&email="+data.email+"&&password="+data.password+"&&id="+this.id;
     console.log(this.link);
     this.http.put("http://localhost/customapi/put.php/"+this.link).subscribe(data=>{console.log(data)});
     location.reload();  
 }
 deleteData(data){

    this.id=data.id;
   this.http.delete("http://localhost/customapi/delete.php?id="+this.id).subscribe(data=>{console.log(data)});
         location.reload();  

 }
}
