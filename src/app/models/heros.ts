export class Heros {
    id: number;
    nom:string;
    pantheon: string;
    genre: string;
    origine: string;
    exploits:string;
    image: string;
    titre: string;

    constructor(id: number = null, nom: string = null, pantheon: string = null, genre:string= null, titre:string =null, origine: string = null, exploits:string = null, image:string = null) {
        this.id = id;
        this.nom = nom;
        this.pantheon = pantheon;
        this.genre = genre;
        this.titre = titre;
        this.origine = origine;
        this.exploits = exploits;
        this.image = image;
    }
}
