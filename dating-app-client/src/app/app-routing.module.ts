import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgaurdGuard } from 'src/Gurds/authgaurd.guard';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotFoundComponent } from './components/Shared/not-found/not-found.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberlisrComponent } from './members/memberlisr/memberlisr.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate : [AuthgaurdGuard],
    children : [
      {path:'lists',component:ListsComponent},
      {path:"Members" , component:MemberlisrComponent},
      {path:"Members/:id",component:MemberDetailComponent},
      {path:"Message",component:MessagesComponent},
    ]
  },
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
