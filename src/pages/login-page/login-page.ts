import { Account } from '../../models/account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Auth, User, IDetailedError} from '@ionic/cloud-angular';
import { HomePage } from '../../pages/home/home';
import { SignupPage } from '../../pages/signup-page/signup-page';
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
  providers: [Account]
})
export class LoginPage {

  account = new Account();


  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public auth: Auth, public user: User, public toastCtrl: ToastController) {

    this.account.email="mail@example.com";
    this.account.password="";

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
        if(err.message === 'Unauthorized'){
          this.translate.get("LOGIN_ERROR_UNAUTHORIZED").subscribe(translation => {
            let toast = this.toastCtrl.create({
              message: translation,
              duration: 3000
            });
            toast.present();
          });
        }
             
        
    });
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

}
