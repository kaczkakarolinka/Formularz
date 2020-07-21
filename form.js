document.addEventListener("DOMContentLoaded", function(){
    var title = document.getElementById("title");
    var category = document.querySelector("select");
    var fee = document.getElementById("fee");
    var proceed = document.getElementById("proceed");
    var warning = document.getElementById("warning");
    var tooShort = document.createElement("p");
    var tooLong = document.createElement("p");
    var wrongCategory = document.createElement("p");
    var background = document.getElementById("files_background");
    var fake_button = document.getElementById("fake_button");

    var parentDiv = category.parentNode;

    tooShort.innerText="Please provide a name for your quiz (min. 5 chars)";
    tooShort.style.color="red";

    tooLong.innerText="The title is too long (max. 50 chars)";
    tooLong.style.color="red";

    wrongCategory.innerText="Please select a category";
    wrongCategory.style.color="red";
    
    title.addEventListener("click", function(){
        title.value="";
        title.style.color="#42166a";
    })

    proceed.addEventListener("click", function(e) {
        e.preventDefault();
        if (title.value.length < 5 | title.value === "Enter quiz title") {
            title.style.borderBottomColor = "red";
            warning.appendChild(tooShort);
            background.style.top="380px";
            fake_button.style.top="405px";
            return false
        }
        else if (title.value.length > 50) {
            title.style.borderBottomColor = "red";
            warning.appendChild(tooLong);
            background.style.top="380px";
            fake_button.style.top="405px";
            return false
        }
        else if (title.style.borderBottomColor = "red" && warning.lastChild.innerText === tooShort.innerText) {
            title.style.borderBottomColor = "#e0dbf5";
            tooShort.parentElement.removeChild(tooShort);
        }
        else if (title.style.borderBottomColor = "red" && warning.lastChild.innerText === tooLong.innerText) {
            title.style.borderBottomColor = "#e0dbf5";
            tooLong.parentElement.removeChild(tooLong);
        }

        if (category.value === "Choose category") {
            category.style.borderBottomColor = "red";
            parentDiv.insertBefore(wrongCategory, category.nextSibling);
            return false
        }
        else if (category.style.borderBottomColor = "red" && category.value !== "Choose category") {
            category.style.borderBottomColor = "#e0dbf5";
            wrongCategory.parentElement.removeChild(wrongCategory);
        }

        if (fee.value.indexOf("£") === -1) {
            fee.value = "£" + fee.value;
        }
        
    })
})