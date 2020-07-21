document.addEventListener("DOMContentLoaded", function(){
    var title = document.getElementById("title");
    var category = document.querySelector("select");
    var fee = document.getElementById("fee");
    var proceed = document.getElementById("proceed");
    
    title.addEventListener("click", function(){
        title.value="";
        title.style.color="#42166a";
    })

    proceed.addEventListener("submit", function(e) {
        e.preventDefault();
    })
})