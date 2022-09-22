
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
