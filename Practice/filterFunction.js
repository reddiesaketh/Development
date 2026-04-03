//lets practice filter function
let x=[1,2,3,4,5,6,7,8,9,10];

//let's try filtering the even numbers from this array;

let method1=x.filter(i=> i%2 === 0);

function func(i){
    return (i%2 === 0);
}

let method2=x.filter(func);

console.log(method1);
console.log(method2);