import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { UserDto } from 'src/models/user-dto';
import { AccountService } from 'src/Services/account.service';
import{ToastrService} from'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:UserDto = {
    UserName:'',
    Password: ''
  }
  constructor(public accountService:AccountService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(){
     this.accountService.login(this.model)
      .subscribe(res => {
        this.router.navigateByUrl("/Members")
        console.log(res);
      },
      (err) => {
        this.toastr.error(err.error);
        console.log(err);
      });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl("")
  }


}
