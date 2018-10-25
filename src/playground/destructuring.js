// OBJECT DESTRUCTURE

const personn = {
    name: 'Ambre',
    age: 29,
    location: {
        city: 'Paris',
        temp: 30
    }
};

const {name: firstname= 'unknown', age} = personn;

console.log(`${firstname}`);

const {temp: temperature} = personn.location;
console.log(`${temperature}`);



const book = {
    title: 'book title',
    author: 'RH',
    publisher: {
        name: "penguoin"
    }
}
const {name: publisherName = 'self-publih'} = book.publisher;

console.log(publisherName);

// ARRAY DESTRUCTURE

const address = ['82 rue tutu', 'Paris', 'IDF', '75018'];
const [street, city, region, zip] = address;
const [street2, , , zip2, otherInfo = 'new one'] = address;

console.log(zip);
console.log(zip2);
console.log(otherInfo);



