const fs = require('fs');

const genders = ['F', 'M'];

const maleNames = [
    'Adam',
    'Bartek',
    'Cezary',
    'Darek',
    'Emil',
    'Filip',
    'Grzegorz',
    'Henryk',
    'Ignacy',
    'Jan',
];

const femaleNames = [
    'Krystyna',
    'Ludomiła',
    'Łucja',
    'Maria',
    'Natalia',
    'Olga',
    'Paulina',
    'Róża',
    'Stanisława',
    'Tamara',
];

const lastNames = [
    'Mickiewicz',
    'Miłosz',
    'Mrożek',
    'Sienkiewicz',
    'Barańczak',
    'Fog',
    'Anonim',
    'Norwid',
    'Prus',
    'Rejmont'
];

const people = [];

const randChoice = (arr) => {

    const randomArrIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomArrIndex];

    return randomItem;
};

for (let i = 0; i<20; i++) {
    const randomGender = randChoice(genders);

    const name = randChoice(randomGender === 'M' ? maleNames : femaleNames);

    const person = {
        gender: randomGender,
        firstName: name,
        lastName: randChoice(lastNames),
        age: Math.floor(Math.random() * 61 ) + 18,
        telephone: `+48${Math.floor(100000000 + Math.random() * 900000000)}`,
    };

    people.push(person);
    console.log('people', people);
}

const data = JSON.stringify(people, null, 2);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});



/*
26.2 Wstęp
const os = require('os'); //os - inf. o systemie. require=import
console.log(os); //pokazuje metody, które pomogą w zwróceniu odpowienich inf.

//zwrócone metody:
//rodzaj platformy
console.log('Platform: ', os.platform());
//rodzaj architektury
console.log('Arch: ', os.arch());
//jakieś podstawowe informacje o użytkowniku.
console.log('User name: ', os.userInfo().username);
*/