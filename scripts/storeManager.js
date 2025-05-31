function save(service){
    console.log(service);

    let val = JSON.stringify(service);

    console.log(val)

    localStorage.setItem("services",val);
}

function readServices(){

}