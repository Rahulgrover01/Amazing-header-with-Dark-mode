let btn = document.getElementById("btn")
let btnIcon= document.getElementById("btnIcon")
let btnText= document.getElementById("btnText")
btn.onclick=()=>{
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        btnIcon.src= "images/sun.png"
        btnText.textContent="Light"
    }
    else{
        btnIcon.src= "images/moon.png"
        btnText.textContent="Dark"
    }
}
