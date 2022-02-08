import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {
    userName:'',
    passwrd: ''
  }
  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  }
  onSubmit(){
     this.accountService.login(this.model)
      .subscribe(res => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

  logout(){
    this.accountService.logout();
  }


}
