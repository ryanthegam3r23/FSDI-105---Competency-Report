let pets=[];

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService= document.getElementById("txtService")
let inputType= document.getElementById("txtType")

//creating the obj constructer
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    if(isValid(newPet)){
        pets.push(newPet)
        displayInfo();
        clearForm();
        displayPets();
    }else{
        alert("Please fill out all the fields")
    }
}

function isValid(aPet){
    let validation = true;

    if(aPet.name === ""){
        validation=false;
    }

    if(aPet.gender === ""){
        validation=false;
    }

    return validation;
}

function deletePet(petIndex){
    console.log("Delete pet" + petIndex);
    document.getElementById(petIndex).remove();
    pets.splice(petIndex, 1);
    displayPets();
}

function clearForm(){
    let inputName = document.getElementById("txtName").value=""
    let inputAge = document.getElementById("txtAge").value=""
    let inputGender = document.getElementById("txtGender").value=""
    let inputBreed = document.getElementById("txtBreed").value=""
    let inputService= document.getElementById("txtService").value=""
    let inputType= document.getElementById("txtType").value=""
}


function init(){
    //create objs
    let pet1 = new Pet("Scooby",99,"Male","Corgi","Grooming","Credit");
    let pet2 = new Pet("Buddy",43,"Female","Retriever","Grooming","Debit");
    let pet3 = new Pet("Skylar",32,"Female","Pug","Grooming","Cash");
    pets.push(pet1,pet2,pet3);
    console.log(pets);
    displayPets();
    displayInfo();
}
window.onload=init; //render the HTML