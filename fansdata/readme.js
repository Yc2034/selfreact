
// log

console.log({foo, bar, baz});
console.log('%c My friends','color:orange;');


console.table([foo, bar, baz])


console.time('looper')

let i = 0;
while(i< 100000) { i++ }

console.timeEnd('looper')


const deleteMe = () => console.trace('bye bye')


// destructure

const turtle = {
    name: 'Bob',
    leg: 4,
    shell: true,
    diet: 'berries'
}

function feed( {name, meal,diet} ) {
    return 'Feed ${name} ${meal} kilos of ${diet}';
}

// or

function feed(animal) {
    const {name, meal, diet } = animal;
    return 'Feed ${name} ${meal} kilos of ${diet}';

}

// template literal
const {name, meal, diet } = animal;

bil = '${name} is a ${meal} good ${diet}';

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;

// spread syntax

const pikachu = { name: 'Pikachu'};
const stats = { hp: 40, attack: 60, defense: 45};

const lvl0 = {...pikachu, ...stats}
const lvl1 = {...pikachu, hp:45}

let pokemon = ['aaa','vvv'];

pokemon = [...pokemon,'ccc','ddd']
pokemon = ['fff', ...pokemon,'ccc','ddd']


// loops
const orders = [500, 30, 99, 15, 223]

const total = orders.reduce((acc, cur) => acc + cur)

const withTax = orders.map(v = v*1.1)

const highValue = orders.filter( v = v> 100)


// async-await

const sumRandom = async() => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
}