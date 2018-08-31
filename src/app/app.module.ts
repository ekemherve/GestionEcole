import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
