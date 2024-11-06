const person= {fName:'Gregor', lName:'Mendel', age:40};
const myJson= JSON.stringify(person);

const fs= require('fs');

fs.writeFile('./person.json', myJson,()=>{
    console.log("file created");
});

console.log(person);