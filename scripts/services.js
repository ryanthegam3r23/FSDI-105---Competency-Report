console.log("services");

//constructor (description, price)
function Service(title,price){
    this.title=title;
    this.price=price;
}
//register()
function register(){
    let inputTitle = $("#txtTitle").val();
    let inputPrice = $("#txtPrice").val();

    let newService = new Service(inputTitle,inputPrice);
    if(isValid(newService)){
        save(newService);
    }
    $("#txtTitle").val("");
    $("#txtPrice").val("");

}   

//validation

function isValid(service){
    let isValidTitle = true;
    let isValidPrice=true;

    if(service.title == ""){
        isValidTitle=false;
        $("#titleRequirementText").css("color","red").show();
    }else{
        $("#titleRequirementText").hide();
    }

    if(service.price == ""){
        isValidPrice=false;
        $("#priceRequirementText").css("color","red").show();
    }else{
        $("#priceRequirementText").hide();
    }

    return isValidTitle && isValidPrice;
}


//init()
function init(){
    //hook events


    $("#btnRegister").on("click",register);

    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();
}

window.onload=init;