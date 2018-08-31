import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: '', component: AccueilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
