let array = [
    {
        id: 1,
        name: 'name 1'
    },
    {
        id: 2,
        name: 'name 2'
    },
    {
        id: 3,
        name: 'name 3'
    },
    {
        id: 4,
        name: 'name 4'
    },
    {
        id: 5,
        name: 'name 5'
    }
];

const changeArrayElement = (eleId, name) => {
    // const _array = [...array];
    // const element = _array.find(e => e.id === eleId);
    // if ( element === undefined ) {
    //     return false;
    // }
    // element.name = name;
    // return array = _array
    array = array.map((ele) => {
        if ( ele.id === eleId ) {
            return {...ele, name}
        }
        return ele;
    })
}

changeArrayElement(3, 'Vasya');
console.log( array );

const person = {person_id: 1, name: 'Ivan'};

if ( !person.id ) {
    console.log("False");
} else {
    console.log(person.name);
}

if (!Object.keys(person).length) {
    console.log( "False" );
} else {
    console.log(person.name);
}
console.log("==========")
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// delete person.person_id;
console.log(person);
for (const key in person) {
    console.log( key );
    console.log( person[key] );
}

const {person_id : key, name : fName} = person;
console.log(key);
console.log(fName);

const employee = {job: 'Web Developer', name: 'John'};

// const personEmployee = Object.assign(person, employee);
const personEmployee = {...person, ...employee};
console.log(personEmployee);
