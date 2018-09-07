import { Injectable } from '@angular/core';
import { HttpClient,Observable,HttpHeaders } from '@angular/common/http';
import { LoggerService }from './logger.service';
import{ Hero } from './hero';
import {AddItem} from './additem.ts';
import { AnimationsComponent } from './animations/animations.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Credentials': true
  })
};
  constructor( private http:HttpClient) { }

 
  getApi(){
      return this.http.get("http://localhost/customapi/get.php",this.httpOptions);
  }
   getLocalApi(){
      return this.http.get("http://localhost/customapi/get.php",this.httpOptions);
   }
   putApi(){
      return this.http.put("http://localhost/customapi/put.php/");
   }
   deleteApi(){
    return this.http.delete("http://localhost/customapi/delete.php");
   }
  getAdds(){
   return [
      new AddItem(HomeComponent,{name:'Walter',bio:'brave'}),
      new AddItem(AboutComponent,{name:'Richard',bio:'bravery'}),
    ];
  }