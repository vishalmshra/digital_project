import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { LoginformComponent } from './loginform/loginform.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  
  {path:'', redirectTo:'registrtaionform', pathMatch:'full'},
  {path: 'loginform', component: LoginformComponent},
  {path: 'shared', component: SharedComponent},
  {path: 'userlist', component: UserlistComponent},
  {path: 'registrtaionform', component: RegistrationformComponent},
  {path: 'dummy', component: DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
