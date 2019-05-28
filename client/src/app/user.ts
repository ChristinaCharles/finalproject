let idCounter = 1;

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(){
        this.id = idCounter;
        idCounter++;
    }
}