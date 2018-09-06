import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service.ts';
@Component({
  selector: 'adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {

ads = [];
  constructor(private userservice:UserService) { }

  ngOnInit() {
  
       this.ads=this.userservice.getAdds();
  }


}
