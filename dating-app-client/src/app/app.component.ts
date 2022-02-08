import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dating-app-client';
  constructor(private accountService:AccountService) {
  }
  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem("user"))
    this.accountService.currentyUser(user);
  }
}
