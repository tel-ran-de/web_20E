const names = ["John", "Jill", "Bill", "Bob"];

const namesObj = [{name: "John"}, {name: "Jill"}, {name: "Bill"}, {name: "Bob"}];

// const namesObj1 = names.map(name => {
//     return {
//         name: name
//     }
// });
console.log( names.map(name => ({name})) );