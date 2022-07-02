document.querySelector("form").addEventListener("submit",logIn);
function logIn(){
    event.preventDefault();
var signInData=JSON.parse(localStorage.getItem("data"))||[];
var email=document.querySelector("#email").value

var password=document.querySelector("#password").value
console.log(email,password);
var check=signInData.filter(function(elem){
return (elem.stuEmail==email&&elem.stuPassword==password);
})
if(check.length>0){
    alert("Log In Successful")
    window.location.href="http://127.0.0.1:5500/ProjectZostel/book%20now/index.html"
}else{
    alert("Incorrect Information")
}

console.log(signInData);}