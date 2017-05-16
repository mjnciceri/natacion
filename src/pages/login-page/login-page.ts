import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../../pages/home/home';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  account: {email: string, password: string} = {
      email: 'test@example.com',
      password: 'test'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public auth: Auth, public user: User) {
    translate.setDefaultLang('es');
    if (this.auth.isAuthenticated()) {
      this.navCtrl.push(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    this.auth.login('basic', this.account).then(() => {
                this.navCtrl.push(HomePage);
            }, (err: IDetailedError<string[]>) => {
                for (let e of err.details) {
                    if (e === 'conflict_email') {
                        //this.showError();
                    } else {
                      // handle other errors
                    }
                }
        });
  }

}
