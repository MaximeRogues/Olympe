export class Heros {
    id: number;
    nom:string;
    origine: string;
    exploits:string;
    image: string;

    constructor(id: number, nom: string, origine: string, exploits:string, image:string) {
        this.id = id;
        this.nom = nom;
        this.origine = origine;
        this.exploits = exploits;
        this.image = image;
    }
}
