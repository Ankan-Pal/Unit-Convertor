
function  done(){
    const txt = document.getElementById("txt");
    const result = document.querySelector(".result");
    let ans = txt.value / 1000;
    result.innerHTML = ans+ " kg";
}
window.addEventListener('load',function() {
    setTimeout(function(){
        document.querySelector(".loadscr").style.display = "none";
        document.querySelector(".head").style.display = "block";
        document.querySelector(".head").style.backgroundColor="white";
    },1000)
});