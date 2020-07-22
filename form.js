document.addEventListener("DOMContentLoaded", function(){
    var title = document.getElementById("title");
    var category = document.querySelector("select");
    var fee = document.getElementById("fee");
    var files = document.getElementById("files");
    var proceed = document.getElementById("proceed");
    var warning = document.getElementById("warning");
    var tooShort = document.createElement("p");
    var tooLong = document.createElement("p");
    var wrongCategory = document.createElement("p");
    var background = document.getElementById("files_background");
    var fake_button = document.getElementById("fake_button");
    var form = document.querySelector("form");
    var yourTitle = document.createElement("h1");
    var yourCategory = document.createElement("p");
    var yourCategoryValue = document.createElement("p");
    var yourFee = document.createElement("p");
    var yourFeeValue = document.createElement("p");
    var yourImg = document.createElement("img");
    var container = document.getElementById("container");
    var thankYou = document.createElement("h1");
    var anotherOne = document.createElement("button");
    var containerDiv = document.createElement("div");
    var titleDiv = document.createElement("div");
    var categoryDiv = document.createElement("div");
    var buttonCont = document.createElement("div");
    var imgDiv = document.createElement("div");
    var feeDiv = document.createElement("div");

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
        if (title.value.length < 5 || title.value === "Enter quiz title") {
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
        else if (title.style.borderBottomColor === "red" && warning.lastChild.innerText === tooShort.innerText) {
            title.style.borderBottomColor = "#e0dbf5";
            tooShort.parentElement.removeChild(tooShort);
        }
        else if (title.style.borderBottomColor === "red" && warning.lastChild.innerText === tooLong.innerText) {
            title.style.borderBottomColor = "#e0dbf5";
            tooLong.parentElement.removeChild(tooLong);
        }
    })

    proceed.addEventListener("click", function() {
        if (category.value === "Choose category") {
            category.style.borderBottomColor = "red";
            parentDiv.insertBefore(wrongCategory, category.nextSibling);
            return false
        } else if (category.value !== "Choose category" && category.style.borderBottomColor === "red") {
            category.style.borderBottomColor = "#e0dbf5";
            wrongCategory.parentElement.removeChild(wrongCategory);
        }
    })

    fee.addEventListener("blur", function() {
        var valueToRound = parseFloat(fee.value);

        if (isNaN(parseInt(fee.value)) && fee.value.indexOf("£") === -1 || parseInt(fee.value) < 0 || parseFloat(fee.value) < 5) {
            fee.value = "£0.00";
        } else if (fee.value.indexOf(".") === -1) {
            fee.value = fee.value + ".00";
        } else if (fee.value !== "£0.00" && fee.value.indexOf("£")) {
            function Round (n, m) {
                var factor = Math.pow(10, m);
                return Math.round(n*factor)/factor;
            }
            fee.value = "£" + Round(valueToRound, 2);
        }

        if (fee.value.indexOf("£") === -1) {
            fee.value = "£" + fee.value;
        }
    })

    proceed.addEventListener("click", function() {
        if (title.style.borderBottomColor !== "red" && category.style.borderBottomColor !== "red" && fee.value !== "£0.00" && files.value !== "") {
            yourTitle.innerText = title.value;
            yourCategory.innerText = "Quiz category";
            yourCategoryValue.innerText = ": " + category.value;
            yourFee.innerText = "Entry fee: ";
            yourFeeValue.innerText = fee.value;
            yourFeeValue.id = "feeValue";
            thankYou.innerText = "Quiz created, thank you!";
            anotherOne.innerText = "Create another one";
            //próbowałam załączyć zdjęcie poprzez dodanie atrybutu "src" i przypisania
            //do niego files.value, ale pojawiał się problem w postaci
            // C://fakepath. Próbowałam go rozwiązać na kilka sposóbów znalezionych w internecie,
            //ale żaden nie przyniósł pożądanego efektu,
            //więc po prostu dodałam wyświetlanie nazwy pliku.
            container.appendChild(thankYou);
            container.appendChild(containerDiv);
            containerDiv.id = "containerDiv";
            containerDiv.appendChild(titleDiv);
            titleDiv.id = "titleDiv";
            containerDiv.appendChild(categoryDiv);
            categoryDiv.id = "categoryDiv";
            yourImg.setAttribute("src", "./3229335.jpg");
            form.parentElement.removeChild(form);
            
            categoryDiv.appendChild(yourCategory);
            categoryDiv.appendChild(yourCategoryValue);
            yourCategoryValue.style.fontWeight = "bold";
            yourCategoryValue.className = "categoryStyle";
            yourCategory.className = "categoryStyle";

            titleDiv.appendChild(imgDiv);
            titleDiv.appendChild(feeDiv);
            imgDiv.appendChild(yourImg);
            yourImg.id = "image";
            feeDiv.appendChild(yourTitle);
            feeDiv.appendChild(yourFee);
            yourFee.style.display = "inline";
            yourFee.style.color = "#42166a";
            feeDiv.appendChild(yourFeeValue);
            
            container.appendChild(buttonCont);
            buttonCont.appendChild(anotherOne);
            yourTitle.id = "yourTitle";
            thankYou.id = "thankYou";
            buttonCont.className = "button";
            anotherOne.id = "anotherButton";
        }
    })
})