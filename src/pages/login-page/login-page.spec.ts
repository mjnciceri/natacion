import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicPage, NavController, NavParams, ToastController, IonicModule } from 'ionic-angular';
import { ErrorHandler } from '@angular/core';
import { LoginPage } from '../../pages/login-page/login-page';
import { SignupPage } from '../../pages/signup-page/signup-page';

import { Auth, User, IDetailedError} from '@ionic/cloud-angular';
import { Account } from '../../models/account';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


let comp: LoginPage;
let fixture: ComponentFixture<LoginPage>;
 
describe('Component: Root Component', () => {

    let navCtrl:any;
    let navParams:any;
    let translate:any;
    let auth:any;
    let user:any;
    let toastCtrl:any;

    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [LoginPage],
             providers: [
                Account,
                {provide: NavController, useValue: navCtrl},
                {provide: NavParams, useValue: navParams},
                {provide: TranslateService},
                {provide: Auth, useValue: auth},
                {provide: User, useValue: user},
                {provide: ToastController, useValue: toastCtrl}
            ],
 
            imports: [
                IonicModule.forRoot(LoginPage),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [Http]
                    }
                })
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {

        fixture = TestBed.createComponent(LoginPage);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('redirects to register', () => {
        comp.goToSignup();
        fixture.detectChanges();
        expect(comp['rootPage']).toBe(SignupPage);
    });
 
});