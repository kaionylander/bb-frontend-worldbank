import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorApiService {
  private baseUrl = 'http://localhost:8080/worldbank/indicators';

  constructor(private http: HttpClient) { }

  getIndicators(countryCode: string) {
    const url = `${this.baseUrl}?countryCode=${countryCode}`;
    return this.http.get<any[]>(url);
  }
}
