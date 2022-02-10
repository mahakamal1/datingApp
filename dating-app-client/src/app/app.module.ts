import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/Shared/nav/nav.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { MatchesComponent } from './components/matches/matches.component';
import { RegisterComponent } from './components/register/register.component';
import { MemberlisrComponent } from './members/memberlisr/memberlisr.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { NotFoundComponent } from './components/Shared/not-found/not-found.component';
import {ToastrModule} from 'ngx-toastr'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MatchesComponent,
    RegisterComponent,
    MemberlisrComponent,
    MemberDetailComponent,
    ListsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    ToastrModule.forRoot({
      positionClass : 'toast-bottom-right'
    })

  ],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
