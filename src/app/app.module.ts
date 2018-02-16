import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MatchesPage } from '../pages/matches/matches';
import { IplServiceProvider } from '../providers/ipl-service/ipl-service';

import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';
import { ValidationProvider } from '../providers/validation/validation';
import {JwtHelper} from "angular2-jwt";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		LoginPage,
		RegisterPage,
		MatchesPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		IonicStorageModule.forRoot()

	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage,
		LoginPage,
		RegisterPage,
		MatchesPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    IplServiceProvider,
    ValidationProvider
	]
})
export class AppModule { }
