import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from "angular2-jwt";
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map'


/*
  Generated class for the IplServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IplServiceProvider {
	jwtHelper = new JwtHelper();
	environment: string;
	user: any;
	token: any;
	constructor(public http: HttpClient, private storage: Storage) { }

	getenvironment = () => {
		// this.environment = "localhost";
		this.environment = "prod";
		var data = {};
		switch (this.environment) {
			/* LocalHost Urls - Used SIT information*/
			case 'localhost':
				data = {
					env: 'dev',
					baseUrl: "http://localhost:3001"
				};
				break;

			/* Production Urls */
			case 'prod':
				data = {
					env: "prod",
					baseUrl: "https://ipl-fun.herokuapp.com"
				};
				break;

			/* Default url's */
			default:
				data = {
					env: "dev",
					baseUrl: "http://localhost:3001"
				};
		}
		return data;
	}

	// Storing Authentication Token
	authSuccess(token) {
		this.storage.set('token', token);
		this.user = this.jwtHelper.decodeToken(token);
		this.storage.set('profile', this.user);
	}

	// Player Registration

	playerRegister(playerData): Observable<any> {
		let env = this.getenvironment();
		const url = `${env['baseUrl']}/player/signup`;
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
		})
		return this.http.post(url, playerData, { headers })
			.map(
				res => {
					const data: any = res
					return data;
				}
			)
	}

	// Player Login

	playerLogin(playerData): Observable<any> {
		let env = this.getenvironment();
		const url = `${env['baseUrl']}/player/login`;
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
		})
		return this.http.post(url, playerData, { headers })
			.map(
				res => {
					const data: any = res
					console.log('data', data)
					this.authSuccess(data.token);
					return data;
				}
			)
	}

	// Get the list of matches.

	getMatches() {
		let env = this.getenvironment();
		let token = "";
		this.storage.get('token').then((token) => {
			token = token;
		  });
		const url = `${env['baseUrl']}/match`;
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		})
		return this.http.get(url, { headers }).map(
			res => {
				const matches = res
				return matches;
			}
		)
	}


}
