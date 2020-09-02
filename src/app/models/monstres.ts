import { Genres } from './genres';
import { Pantheons } from './pantheons';

export class Monstres {
    id: number;
    name: string;
    pantheon: Pantheons;
    gender: Genres;
    place: string;
    history: string;
    picture: string;
    title: string;

    constructor(id: number = null, name: string = null, pantheon: Pantheons = null, gender:Genres= null, title:string =null, place: string = null, history: string = null, picture: string = null ) {
        this.id = id;
        this.name = name;
        this.pantheon = pantheon;
        this.gender = gender;
        this.title = title;
        this.place = place;
        this.history = history;
        this.picture= picture;
    }
}
