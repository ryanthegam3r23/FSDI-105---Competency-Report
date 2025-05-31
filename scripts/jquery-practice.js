console.log("Welcome to jQuery");

// JS vs jQuery (getting the elements)
//byId
let htmlElement = document.getElementById("red");
htmlElement = $("red");
console.log(htmlElement);

//byClass
let htmlElement2 = document.getElementsByClassName("tomato-bg");
htmlElement2 = $(".tomato-bg");
console.log(htmlElement2);

//byTagName
let htmlElement3 = document.getElementsByTagName("p")
console.log(htmlElement3);



// ID selector
$("#red").css("background-color","red").css("color","white");
$("#blue").css("background-color","blue").css("color","white");


// class selector
let paragraphWithBorder = $(".with-border");
paragraphWithBorder.css("border","3px solid black");

paragraphWithBorder.on("click",function(){
    console.log("clicked")
    $(this).addClass("bg-gray");
});
// tag selector
$("p").css("cursor","pointer");
//$("p").hide();

function register(){
    let testEntry = $("#testInput").val();
    $("results").append(`<li>${testEntry} </li>`);
}

//hook event
$("#btnRegister").on("click",register);

//another simple and common function

function clickMe(){
    console.log("clicked me");
    $("#red").hide();
    $("p:last").css("border","3px solid black");
}

$("#btnClick").on("click",clickMe);
