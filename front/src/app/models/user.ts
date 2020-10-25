export class User {

    id: number;
    username: string;
    password: string;
    phoneNumber: number;
    adresseMail: string;
    token: string;

    constructor(id: number = null, username: string = null, password: string = null, phoneNumber: number = null, adresseMail: string = null) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.adresseMail = adresseMail;
    }
}
