export class Quiz {

     id: number;
     enonce: string;
     q1: string;
     q2: string;
     q3: string;
     q4: string;
     reponse: string;

	constructor(id: number, enonce: string, q1: string, q2: string, q3: string, q4: string, reponse: string) {
		this.id = id;
		this.enonce = enonce;
		this.q1 = q1;
		this.q2 = q2;
		this.q3 = q3;
		this.q4 = q4;
		this.reponse = reponse;
	}
    



}
