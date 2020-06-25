export class Monstres {
    id: number;
    nom: string;
    lieu: string;
    histoire: string;
    image: string;
    titre: string;

    constructor(id: number = null, nom: string = null, titre:string =null, lieu: string = null, histoire: string = null, image: string = null ) {
        this.id = id;
        this.nom = nom;
        this.titre = titre;
        this.lieu = lieu;
        this.histoire = histoire;
        this.image= image;
    }
}
