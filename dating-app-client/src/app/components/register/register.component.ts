import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDto } from 'src/models/user-dto';
import { AccountService } from 'src/Services/account.service';
import { Router } from '@angular/router';
import{ToastrService} from'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelFromRegisterToHome = new EventEmitter();
  model:UserDto = {
    UserName:'',
    Password: ''
  }
  constructor(private registerAccountService:AccountService, private router:Router ,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  cancel(){
    this.cancelFromRegisterToHome.emit(false);
  }
  register(){
    this.registerAccountService.Register(this.model).subscribe(
      (res) => {
        console.log(res);
      },(err) => {
        this.toastr.error(err.error);
      })
  }
  reg(){
    console.log(this.model)
  }
}
