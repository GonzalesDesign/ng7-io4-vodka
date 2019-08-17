import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CocktailsInterface } from './cocktails.model';

@Injectable({
	providedIn: 'root'
})
export class RussianCocktailsService {
	private _url = './../assets/data/cocktails-russian.json';

	// public aCollectionRussiaX = [];

	constructor(private _httpClient: HttpClient) {}

	/*-===========================================================-*/
	public fGetAllCocktailData(): Observable<CocktailsInterface[]> {
		const allDataCocktails = this._httpClient
			.get<CocktailsInterface[]>(this._url)
			.pipe(catchError(this.fHandleError));
		console.log('allDataCocktails: ', allDataCocktails);
		return allDataCocktails;
		// return this._httpClient
		// 	.get<CocktailsInterface[]>(this._url)
		// 	.pipe(catchError(this.fHandleError));
	}

	/*-===========================================================-*/
	public fetchUsers() {
		console.log(
			'fetchUsers.this._httpClient: ',
			this._httpClient.get(this._url).pipe(map((res: Response) => res.json))
		);

		// console.log('fetchUsers.Detail: ', this._httpClient.get(`${this._url}?i=${id}`));

		// console.log(
		// 	this._httpClient
		// 	 .get(this._url)
		// 	 .pipe(
		// 		map((res: Response) => res.json)
		// 	 )
		// )

		// console.log(
		// 	'fetchUsers.this._httpClient X: ',
		// 	this._httpClient.get(this._url)
		// 	.pipe(
		// 		map(map(res => res.data),
		// 		map(a => {
		// 			return {
		// 				firstnames: a.map(_ => _.firstname),
		// 				lastnames: a.map(_ => _.lastname)
		// 			}
		// 		})
		// 	);

		// return this.http.get("/api/users").map((res: Response) => res.json())
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

	/*-===========================================================-*/
	public fGetCocktailDetail(id: string) {
		console.log('fGetCocktailDetail: ', this._httpClient.get(`${this._url}?i=${id}`));
		
		return this._httpClient.get(`${this._url}?i=${id}`);

		 
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

	// public fGetAllCustoms() {
	// 	return [...this.aCollectionRussiaX]; // spread, makes copy of the private version and return a new array
	// }

	// public fGetCustom(id: string) {
	// 	return {
	// 		...this.aCollectionRussiaX.find(custom => {
	// 			return custom.id === id;
	// 		})
	// 	}; // spread, make copy and makes an object
	// }
}
