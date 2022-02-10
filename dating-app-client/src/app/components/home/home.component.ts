import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserDto } from 'src/models/user-dto';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TooglerMode:boolean;
  usersList : UserDto[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.getAll()
  }
   getAll(){
    return this.userService.getAllUsers()
    .subscribe( res => {
       console.log(res);
    },
    err => {
      console.log(err);
    })
  }
  toogleRegisterMode(){
    this.TooglerMode = !this.TooglerMode;
  }

  CancelRegisterForm(event:boolean){
    this.TooglerMode = event;
  }
}
