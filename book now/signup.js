var email=document.querySelector("#email")
var number=document.querySelector("#num")
var password=document.querySelector("#password")
function Signup(){
    event.preventDefault();
    
    
var Studentinfo={
    stuEmail:email.value,
    stuNumber:number.value,
    stuPassword :password.value

}
var info=JSON.parse(localStorage.getItem("data"))||[];
info.push(Studentinfo);
localStorage.setItem("data",JSON.stringify(info))
console.log(localStorage.getItem("data"));
alert("Sign up Successful");
window.location.href='http://127.0.0.1:5500/ProjectZostel/book%20now/signin.html'

}