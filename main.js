import "./input.css"
// selectors
const inputURL = document.querySelector("#inputURL");
const qrImg = document.querySelector("#qr-img");
const btn = document.querySelector("#btn");

btn.addEventListener("click",run)

function run(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputURL.value;
    inputURL.value=null;
}