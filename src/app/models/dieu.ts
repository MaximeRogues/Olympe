export class Dieu {
    id: number;
    nom:string;
    attributs: string;
    domaine: string;
    cara:string;
    image: string;

    constructor(id: number, nom: string, attributs: string, domaine: string, cara:string, image: string) {
        this.id = id;
        this.nom = nom;
        this.attributs = attributs;
        this.domaine = domaine;
        this.cara = cara;
        this.image = image;
    }
}
