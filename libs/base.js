
let showMessage = document.querySelector(".showMessage")
console.log(showMessage)
let mShown = false;
showMessage.onclick = function (){
    if(!mShown) {
        let message = document.querySelector(".message")
        message.style.width = "500px"
        message.style.borderLeft = "8px solid #ffc5c5"
        mShown = true;
        setInterval(()=>{
            message.style.width = "0px"
            message.style.borderLeft = "none"
        },3000)
    }

}