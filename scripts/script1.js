console.log("Welcome to session 1");

// ---- ARRAYS ---- 
let fruits = ["apple","banana","orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "Cherry";
console.table(fruits);

//array length
console.log(fruits.length);
// add and remove items
fruits.push("watermelon");
console.log(fruits);

fruits.pop();//removes from the end
fruits.pop();//removes from the end
console.log(fruits);

fruits.unshift("grapes");//adding at the beginning
console.log(fruits);

fruits.shift();//remove from the beginning
console.log(fruits);



let students = ["Ryan","Eric","Steve"];

for(let i=0;i<students.length;i++){
    console.log(students[i])
}

// ----- OBJECTS {} ------
// An obj is a collection of key-pair values
// we can have the data together in an structure way

//obj literal
let person = {
    name:"Mike",
    lastName:"Scott",
    age:40,
    isStudent:false
}

// accessing the properties in an obj
console.log(`The person name is ${person.name}`);
console.log(`The person age is ${person[`age`]}`);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
    name:"Leopoldo",
    age:99,
    email:"leo@sdgku.edu",
    address:"742 evergreen terrace springfield, USA"
}
let student2 = {
    name:"Ryan",
    age:20,
    email:"something@gmail.com",
    address:"1923 goodbye st Allen TX, USA"
}
let student3 = {
    name:"Steve",
    age:49,
    email:"good@gmail.com",
    address:"5566 trash st star tx, USA"
}

let studentsList =[];
studentsList.push(student1,student2,student3,);

console.log("studentsList: " + studentsList.length);

document.getElementById("studentcounter").innerHTML="student List: " +studentsList.length

console.log(`email: ${studentsList[0].email}, address: ${studentsList[0].address}`);

function getStudentsNames(){
    let list = document.getElementById("list")
    for(let i=0;i<students.length;i++){
        console.log(`email: ${studentsList[i].name}`)
        list.innerHTML+=`<li>${studentsList[i].name}</li>`
    }
}

getStudentsNames();