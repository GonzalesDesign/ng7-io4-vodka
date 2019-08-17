import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CocktailsInterface } from './cocktails.model';

@Injectable({
	providedIn: 'root'
})
export class CocktailsService {
	constructor(private _httpClient: HttpClient) {}

	/*-===========================================================-*/

	public fGetAllCocktailData(url): Observable<CocktailsInterface[]> {
		const allDataCocktails = this._httpClient
			.get<CocktailsInterface[]>(url)
			.pipe(catchError(this.fHandleError));
		// console.log('allDataCocktails: ', allDataCocktails);
		return allDataCocktails;
	}

	/*-===========================================================-*/
	public fGetCocktailDetail(url: string, id: string) {
		console.log('fGetCocktailDetail: ', this._httpClient.get(`${url}?i=${id}`));
		return this._httpClient.get(`${url}?i=${id}`);
		// return {
		// 	...this.fGetAllCocktailData().subscribe(detail => {
		// 		console.log('detail: ', detail.find(() => id));
		// 		return detail.find(data => {
		// 			console.log('data.id: ', data.id);
		// 			return data.id === id;
		// 		});
		// 		// return detail.id === id;
		// 	})
		// }; // spread, make copy and makes an object
	}

	public fGetDrinkDetail(id: string) {
		// console.log('fGetCocktailDetail: ', this._httpClient.get(`${url}?i=${id}`));
		console.log('fGetCocktailDetail: ', this._httpClient.get(`${id}`));
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
