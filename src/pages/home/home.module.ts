import { NgModule } from '@angular/core';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {}
