import { exit } from 'process';
import * as readlineSync from 'readline-sync';



class Commands {
    Palindrome(str:string):boolean {
        const cleanInput = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanInput === cleanInput.split('').reverse().join('');
    }

    Lower(str:string):boolean {
        return str.split('').every(char => char === char.toLowerCase());
    }

    Digits(str:string):boolean {
        return str.split('').every(char => /\d/.test(char));
    }

    Armstrong(str:string):boolean {
        const power = str.length;

        const sum = str.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);

        return parseInt(str,10) === sum;
    }

    Nationalize(str:string) {
        let api=`https://api.nationalize.io/?name=${str}`
        fetch(api)
        .then(response => response.json())
        .then(data=>{
                let countryCode=data.country[0].country_id
                let prob=data.country[0].probability
                fetch("https://freddieprosper-pupilperfume.codio.io/.guides/data/countryISO2Name.json")
                .then(response => response.json())
                .then(data=>{
                        let countryName=data[countryCode]
                        console.log(`for ${str} ${countryName} ${prob}`)
                })
        })

    }

    arrCommands: Function[] = [];

    constructor() {
        this.arrCommands.push(this.Palindrome);
        this.arrCommands.push(this.Lower);
        this.arrCommands.push(this.Digits);
        this.arrCommands.push(this.Armstrong);
        this.arrCommands.push(this.Nationalize);
    }
}

function main() {
    while(true){
                console.log(`
            The available commands are:
            1 - Palindrome - Check if the input is a palindrome
            2 - Lower - Check if all characters in the input are lowercase
            3 - Digits - Check if all characters in the input are digits
            4 - Armstrong - Check if the input is an "Armstrong Number"
            5 - Nationalize - Check the nationality probability of a given first name
            6 - Exit - Exit successfully from the application
        `);

        const commandNumber: number = 5//parseInt(readlineSync.question('Choose a command number: '), 10);
        const userinput: string ="baker" //readlineSync.question('Choose an input: ');
        const command = new Commands();
        if(commandNumber==6)exit()
        command.arrCommands[commandNumber - 1](userinput);
    }

}

main();
