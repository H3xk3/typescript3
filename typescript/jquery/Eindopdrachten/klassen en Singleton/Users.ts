import { Logger } from './Logger';

export class Users {
    private logger: Logger = Logger.getInstance();
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.logger.log(`Een nieuwe gebruiker met de naam ${this.name} is aangemaakt.`);
    }

    public setName(newName: string): void {
        this.logger.log(`De gebruikersnaam is veranderd van ${this.name} naar ${newName}.`);
        this.name = newName;
    }
}
