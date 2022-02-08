import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersList : [] = [];
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.getAll()
  }
  async getAll(){
    await this.userService.getAllUsers().subscribe( res => {
       console.log(res);
    },
    err => {
      console.log(err);
    })
  }
}
