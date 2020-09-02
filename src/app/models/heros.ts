import { Pantheons } from './pantheons';
import { Genres } from './genres';

export class Heros {
    id: number;
    name:string;
    pantheon: Pantheons;
    gender: Genres;
    origin: string;
    exploits:string;
    picture: string;
    title: string;

    constructor(id: number = null, name: string = null, pantheon: Pantheons = null, gender:Genres= null, title:string =null, origin: string = null, exploits:string = null, picture:string = null) {
        this.id = id;
        this.name = name;
        this.pantheon = pantheon;
        this.gender = gender;
        this.title = title;
        this.origin = origin;
        this.exploits = exploits;
        this.picture = picture;
    }
}
