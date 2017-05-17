import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../../pages/home/home';
import { Auth, User, IDetailedError } from '@ionic/cloud-angular';
import { Dialogs } from '@ionic-native/dialogs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup-page.html',
  providers: [Dialogs]
})
export class SignupPage {
    
    account: {name: string, email: string, password: string} = {
        name: 'Test Human',
        email: 'test@example.com',
        password: 'test'
    };

    constructor(public navCtrl: NavController, public auth: Auth, public user: User, public translate: TranslateService, private dialogs: Dialogs) {
        translate.setDefaultLang('es');
    }
  
    doSignup() {
        // Attempt to login in through our User service
        this.auth.signup(this.account).then(() => {
                this.navCtrl.push(HomePage);
            }, (err: IDetailedError<string[]>) => {
                for (let e of err.details) {
                    if (e === 'conflict_email') {
                        this.showError();
                    } else {
                      // handle other errors
                    }
                }
        });
    }
    
    showError() {
        
        var texts = {message: "", title: "", button : ""};
        
        this.translate.get("SIGNUP_ERROR_MAIL_EXISTS").subscribe(translation => {
            texts.message = translation;
        });
        
        this.translate.get("GENERAL_ERROR").subscribe(translation => {
            texts.title = translation;
        });
        
        this.translate.get("GENERAL_ACCEPT").subscribe(translation => {
            texts.button = translation;
        });
        
        this.dialogs.alert(texts.message, texts.title, texts.button);
        
    }
    
}
