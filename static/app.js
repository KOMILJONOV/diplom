let inputt = document.querySelector(".input");
let off = document.querySelector(".off");
let search = document.querySelector(".search");
let user = document.querySelector(".user");
let akk = document.querySelector(".akk");
let technology = document.querySelector(".technology");
let buts = document.querySelector(".buts");
let find = document.querySelector(".find");
let password = document.querySelector(".password");
let bodyy = document.getElementsByTagName("body")
let p = document.getElementsByTagName("p")
let a = true;
let users = [
    {username:"katy1808", password:"qwerty123"},
    {username:"ibragimov1808", password:"madiyor3008"},
    {username:"arthurblack", password:"12345678"},
    {username:"abdurahmon1", password:"87654321"},
]
function input(){
    if(a===true){
        inputt.setAttribute("class", "input")
        off.setAttribute("class", "d-none")
        search.setAttribute("class", "search")
        search.classList.add("bg-none")
        search.classList.add("border-none")
    }
}
function sear(){
    if(a===true){
        inputt.setAttribute("class", "d-none")
        off.setAttribute("class", "off")
        off.classList.add("bg-none")
        off.classList.add("border-none")
    }
}
console.log(users);
function login(){
    if(user.value==users[0].username && password.value==users[0].password){
        location.href = "katy1.html"
    } else if(user.value==users[1].username && password.value==users[1].password){
        location.href = "arthur.html"
    } else if(user.value==users[2].username && password.value==users[2].password){
        location.href = "arthur.html"
    } else if(user.value==users[3].username && password.value==users[3].password){
        location.href = "abdurahmon.html"
    } else if(user.value==users[4].username && password.value==users[4].password){
        location.href = "arthur.html"
    }
}


function techno(){
    if(a===true){
        buts.setAttribute("class", "d-none");
        technology.setAttribute("class", "d-flex");
        find.value = "Technology"
    }
}
function fin(){
    if(find.value = " "){
        buts.setAttribute("class", "d-flex");
        technology.setAttribute("class", "d-none");
        find.value = ""
    }
}
function searc(){
    if(a===true){
        if(find.value = "technology" || find.value == "Technology" || find.value == "TECHNOLOGY"){
            buts.setAttribute("class", "d-none");
            technology.setAttribute("class", "d-flex");
            find.value = "Technology"
        }
    }
}


