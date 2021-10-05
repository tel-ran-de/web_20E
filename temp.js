const array = [1,2,3,4,5];

const [a,b] = array;

console.log(a)
console.log(b)

const person  = {
    fName: "John",
    age: 30,
    prof: "Developer"
}

const {prof} = person
console.log( prof )

const func = (...Arguments) => {
    console.log( Arguments )
}

function func1(a,b,c) {
    console.log( arguments[2] )
}

func(1,2,3,4,5,6);
func(1,2,3,4,5,6,7,8,9,0);

func1(2,3,7)