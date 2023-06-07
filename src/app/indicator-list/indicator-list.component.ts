import { Component, OnInit } from '@angular/core';
import { IndicatorApiService } from '../indicator-api.service';

@Component({
  selector: 'app-indicator-list',
  templateUrl: './indicator-list.component.html',
  styleUrls: ['./indicator-list.component.css']
})
export class IndicatorListComponent implements OnInit {
  indicators: any[] = [];
  countryCode!: string;

  constructor(private indicatorApiService: IndicatorApiService) {}

  ngOnInit() {}

  submitForm() {
    this.getIndicators(this.countryCode);
  }

  errorMessage: string = '';
  countryCodePattern = /^[a-zA-Z0-9]+$/;
  countryCodeErrorMessage = 'Special characters are not allowed.';

  clearErrorMessage() {
    this.errorMessage = ''; // Limpa a mensagem de erro
  }

  getIndicators(countryCode: string) {
    this.clearErrorMessage();
    this.indicatorApiService.getIndicators(countryCode)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data && Array.isArray(data.dataPoint)) {
            this.indicators = data.dataPoint;
          } else {
            this.indicators = []; // Limpa o array de indicadores caso não seja uma lista válida
          }
        },
        (error: any) => {
          console.error(error);
          this.errorMessage = error;
        }
      );
  }
  
}