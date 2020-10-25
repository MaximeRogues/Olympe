import { Pantheons } from './pantheons';
import { Genres } from './genres';

export class Dieu {
    id: number;
    name:string;
    pantheon: Pantheons;
    gender: Genres;
    attributes: string;
    domain: string;
    history:string;
    picture: string|any;
    title: string;

    constructor(id: number = null, name: string= null, pantheon: Pantheons = null, gender:Genres= null, title:string =null, attributes: string= null, domain: string= null, history:string= null, picture: string|any= null) {
        this.id = id;
        this.name = name;
        this.pantheon = pantheon;
        this.gender = gender;
        this.title = title
        this.attributes = attributes;
        this.domain = domain;
        this.history = history;
        this.picture = picture;
    }
}
