import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { ErrorHandler } from '@angular/core';
import { NatacionApp } from './app.component';
import { LoginPage } from '../pages/login-page/login-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 
let comp: NatacionApp;
let fixture: ComponentFixture<NatacionApp>;
 
describe('Component: Root Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [NatacionApp],
 
            providers: [
                StatusBar,
                SplashScreen,
                {provide: ErrorHandler, useClass: IonicErrorHandler}
            ],
 
            imports: [
                IonicModule.forRoot(NatacionApp)
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(NatacionApp);
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
 
    it('initialises with a root page of Login when not authenticated', () => {
        expect(comp['rootPage']).toBe(LoginPage);
    });

});