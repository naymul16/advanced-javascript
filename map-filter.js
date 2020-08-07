const numbers=[12,45,67,78,89];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
}
function square(element){
    return element * element;
}
numbers.map(function(element,index,array){
    console.log(element,index,array);
});

const square = (element) =>element * element;
const square= x => x*x;
const result = numbers.map(function(element){
    return element * element;
})

const result = numbers.map( x => x*x);
const bigger = numbers.filter( x => x%2 == 0 );

const isthre = numbers.find(x => x>20);
const fff= numbers.map(x => x)

console.log(fff);