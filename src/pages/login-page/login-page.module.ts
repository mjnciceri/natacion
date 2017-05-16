import { NgModule } from '@angular/core';
import { LoginPage } from './login-page';

@NgModule({
  declarations: [
    LoginPage,
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
