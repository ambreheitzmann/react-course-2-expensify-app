var nameVar = 'Ambre'; 
var nameVar = 'Mike'; 

console.log('name var', nameVar);

let nameLet = 'Jen'; 
nameLet = 'Jenna';
console.log('name var', nameLet);

 
const nameConst = 'Franck';

console.log('name var', nameConst);


function getPetName() {
    const petName = 'Hal';
    return petName;
}

console.log(getPetName())
const fullName = 'Ambre Htz';
let firstname;


if(fullName) {
    firstname = fullName.split(' ')[0];
    
}
console.log(firstname);