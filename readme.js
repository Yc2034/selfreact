
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