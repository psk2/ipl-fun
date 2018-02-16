import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map'



/*
  Generated class for the IplServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IplServiceProvider {

	environment: string;
	// envVar: any;
	constructor(public http: HttpClient) {}

	getenvironment = () => {
		this.environment = "localhost";
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
			case 'getquote.allianz.com.my':
				data = {
					env: "prod",
					baseUrl: "http://localhost:3001"
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

	playerLogin(playerData) {
		let env = this.getenvironment();
		const url = `${env['baseUrl']}/player/login`;
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
		})
		return this.http.post(url, playerData, { headers }).map(
			res => {
				const matches = res
				return matches;
			}
		)
	}

	getMatches() {
		let env = this.getenvironment();
		let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBza0BnbWFpbC5jb20iLCJ1c2VySWQiOiI1YTg0MjEyZmViODljNTE3MGYyYzA1Y2MiLCJpYXQiOjE1MTg2Mjg0NzgsImV4cCI6MTUxODYzMjA3OH0.hC4vV_utv796FnATyjwSyN9wRb_amZKADUwYBGEo4XY"
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
