export class User {

    id: number;
    pseudo: string;
    password: string;
    phoneNumber: number;
    adresseMail: string;

    constructor(id: number = null, pseudo: string = null, password: string = null, phoneNumber: number = null, adresseMail: string = null) {
        this.id = id;
        this.pseudo = pseudo;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.adresseMail = adresseMail;
    }
}
