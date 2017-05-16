import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { NatacionApp } from './app.component';
import { SignupPage } from '../pages/signup-page/signup-page';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b877c557'
  }
};

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NatacionApp,
    SignupPage,
    HomePage,
    LoginPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(NatacionApp),
    CloudModule.forRoot(cloudSettings),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NatacionApp,
    SignupPage,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
