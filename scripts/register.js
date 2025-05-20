console.log("register");
let pet1 = {
    name:"Skylar",
    age:3,
    gender:"girl",
    service:"grooming",
    Breed:"corgi",
}
let pet2 = {
    name:"Buddy",
    age:4,
    gender:"boy",
    service:"grooming",
    Breed:"pug",
}
let pet3 = {
    name:"Daisy",
    age:2,
    gender:"girl",
    service:"grooming",
    Breed:"retriever",
}

let petsList =[];
petsList.push(pet1,pet2,pet3,);

console.log("petsList: " + petsList.length);

document.getElementById("petcounter").innerHTML="pets List: " +petsList.length

function getpetsNames(){
    let list = document.getElementById("list");
    for(let i = 0; i < petsList.length; i++){
        list.innerHTML += `<li>${petsList[i].name}</li>`;
    }
}


getpetsNames();