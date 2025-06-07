function save(service){
    // get the existing data
    let currentData = readServices();

    // push the new service to the array
    currentData.push(service);


    let val = JSON.stringify(currentData);

    // dave the string to the LS
    localStorage.setItem("services",val);
}

function readServices(){
    //get the data from the LS
    let storedData = localStorage.getItem("services");
    // if nothing is found
    if(storedData==null){
        return [];
    }else{
        return servicesArray = JSON.parse(storedData);    
    }
    // if we have data

    // return
}