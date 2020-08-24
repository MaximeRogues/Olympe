
import {Dieu } from './dieu';

export class Genres {

    nom: string;
    dieux: Dieu[];

    constructor( nom: string = null, dieux: Dieu[] = []) {
        this.nom = nom;
        this.dieux = dieux;
    }
}
