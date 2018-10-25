console.log('jj');

const isAdult = (age) => age >=18 ;
const canDrink = (age) => isAdult(); 
export default (age) => age>=65; 

export {isAdult, canDrink};
