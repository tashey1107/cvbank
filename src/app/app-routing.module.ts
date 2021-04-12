import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'nav-bar', component:NavBarComponent},
  {path: 'create-new', component: CreateNewComponent},
  {path: 'forgot-pwd', component: ForgotPwdComponent},
  {path:'add-new', component: AddNewComponent},
  {path:'notification', component: NotificationComponent},
  {path:'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =  [
   LoginComponent, 
   NavBarComponent,
   AddNewComponent,
   CreateNewComponent,
   ForgotPwdComponent,
   NotificationComponent,
   AboutUsComponent,
   ContactUsComponent
  
  ]
