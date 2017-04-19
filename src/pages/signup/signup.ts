import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../../pages/home/home';
import { Auth, User, IDetailedError } from '@ionic/cloud-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
    
  account: {name: string, email: string, password: string} = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  constructor(public navCtrl: NavController, public auth: Auth, public user: User, public toastCtrl: ToastController, translate: TranslateService) {
      translate.setDefaultLang('es');
  }
  
    doSignup() {
        // Attempt to login in through our User service
        this.auth.signup(this.account).then(() => {
                this.navCtrl.push(HomePage);
            }, (err: IDetailedError<string[]>) => {
                for (let e of err.details) {
                    if (e === 'conflict_email') {
                      alert('Email already exists.');
                    } else {
                      // handle other errors
                    }
                }
        });
  }

}
