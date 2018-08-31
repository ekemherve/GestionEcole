import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ICour } from '../domain/icour';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  // La classe courService est celle qui se charge d'aller chercher les données dans spring via l'url ci dessous

  // Url par laquelle on récupère les cours dans spring
  URL = 'http://localhost:8080/cours';

  constructor(private _http: HttpClient) { }

  tousLesCours(): Observable<ICour[]> {

    return this._http.get<ICour[]>(this.URL);
  }
}
