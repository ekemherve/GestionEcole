import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategorie } from '../domain/icategorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  // La classe courService est celle qui se charge d'aller chercher les données dans spring via l'url ci dessous

  // Url par laquelle on récupère les cours dans spring
  URL = 'http://localhost:8080/categories';

  constructor(private _http: HttpClient) { }

  tousLesCours(): Observable<ICategorie[]> {

    return this._http.get<ICategorie[]>(this.URL);
  }
}
