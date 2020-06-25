export class Dieu {
    id: number;
    nom:string;
    attributs: string;
    domaine: string;
    cara:string;
    image: string;
    titre: string;

    constructor(id: number = null, nom: string= null, titre:string =null, attributs: string= null, domaine: string= null, cara:string= null, image: string= null) {
        this.id = id;
        this.nom = nom;
        this.titre = titre
        this.attributs = attributs;
        this.domaine = domaine;
        this.cara = cara;
        this.image = image;
    }
}
