import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AboutUsInterface } from 'src/app/pages/home/about-us/about-us.model';

@Injectable({
	providedIn: 'root'
})
export class AboutUsService {
	constructor(private _httpClient: HttpClient) {}

	/*-===========================================================-*/

	public fGetAllAboutUsData(url): Observable<AboutUsInterface[]> {
		const allDataAboutUs = this._httpClient
			.get<AboutUsInterface[]>(url)
			.pipe(catchError(this.fHandleError));
		// console.log('allDataAboutUs: ', allDataAboutUs);
		return allDataAboutUs;
	}

	/*-===========================================================-*/
	public fHandleError(error) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// client-side error
			errorMessage = `Error: ${error.error.message}`;
		} else {
			// server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
}
