function displayPets(){
    let div=document.getElementById("petList")
    let result = ""
    //let card="";

    for(let i=0;i<pets.length;i++){
        result+= `
            <tr id="${i}">
                <td>${pets[i].name}</td>
                <td>${pets[i].age}</td>
                <td>${pets[i].gender}</td>
                <td>${pets[i].breed}</td>
                <td>${pets[i].service}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        
        `
        
        // card+=`
        // <div class="card col-3">
        //     <div class="card-body">
        //         <h5>${pets[i].name}</h5>
        //         <h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
        //         <p class="card-text"> ${pets[i].gender == "Male" ? "Male♂️" : "Female♀️"} , ${pets[i].age}</p>
        //         <button type="button" class="btn btn-danger">Delete</button>
        //     </div>
        // </div>
        // `;        
    }

    div.innerHTML= result;
}

function displayTable(){

}

function findOldestPet(){
    
}
//mini-challenge: display the gender (use a <p> ) and add a delete button (red use bootstrap)
function displayInfo(){
    document.getElementById("info").innerHTML=`<p>Total of pets: ${pets.length}</p>`
}