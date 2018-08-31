import { ICategorie } from './icategorie';

export interface ICour {

  id: String;
  libelle: string;
  description: string;
  categorie: ICategorie;
}
