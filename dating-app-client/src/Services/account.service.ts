import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from 'src/models/user';
import { UserDto } from 'src/models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  BaseUrl:string ='https://localhost:7027/api/';
  private currentUser = new ReplaySubject<User>(1);
  currentUser$ = this.currentUser.asObservable();
  constructor(private http:HttpClient) { }
  login(model:UserDto){
    return this.http.post(this.BaseUrl+'Account/login',model)
    .pipe(
      map((res:User) => {
        const user = res;
        if(user){
          localStorage.setItem("user", JSON.stringify(user))
          this.currentUser.next(user)
        }
      })
    );
  }
  currentyUser(user:User){
    this.currentUser.next(user)
  }
  logout(){
    localStorage.removeItem("user");
    this.currentUser.next(null)
  }
  Register(model:UserDto){
    return this.http.post(this.BaseUrl+"Account/register",model) .pipe(
      map((res:User) => {
        const user = res;
        if(user){
          localStorage.setItem("user", JSON.stringify(user))
          this.currentUser.next(user)
        }
      })
    );
  }
  reg(){

  }
}
