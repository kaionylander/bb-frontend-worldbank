import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicatorApiService {
  private baseUrl = 'http://localhost:8080/worldbank/indicators';

  constructor(private http: HttpClient) { }

  getIndicators(countryCode: string) {
    const url = `${this.baseUrl}?countryCode=${countryCode}`;
    return this.http.get<any[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.status === 404) {
          errorMessage = 'Not found';
        } else if (error.status === 400) {
          errorMessage = 'Bad request';
        } else if (error.status === 500) {
          errorMessage = error.error
          console.log(error);
        }
        return throwError(errorMessage);
      })
    );
  }
}
