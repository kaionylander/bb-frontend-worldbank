import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorListComponent } from './indicator-list/indicator-list.component';

const routes: Routes = [
  { path: 'indicator-list', component: IndicatorListComponent },
  // Outras rotas do seu projeto, se houver
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
