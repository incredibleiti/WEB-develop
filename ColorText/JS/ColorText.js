// JavaScript source code

var ColorArray = [];

function SelectedColor() {
    document.getElementById("myDropdown").classList.toggle("show");
    var mytextbox = document.getElementById('userInput');
    document.getElementById("myDropdown").onclick = function (event) {
        // display the current click value in textarea
        var colorname = event.target.textContent;
        if (!ColorArray.includes(colorname)) {
            ColorArray.push(colorname);
        }
        else {
            alert("Color already exists");
        }
        mytextbox.innerHTML = ColorArray;
    }
}

function ApplyColor() {
    var defaultpara = document.getElementById("paragraph");

    if (ColorArray.length != 0) {
        var text = defaultpara.innerHTML.trim().split('');
        var sstr = "";
        var index = 0;
        for (var j = 0; j < text.length; j++) {
            if (index == ColorArray.length) {
                index = 0;
            }
            sstr += '<span style="color:' + ColorArray[index] + ';">' + text[j] + '</span>';
            index++;
        }
        defaultpara.innerHTML = sstr;

        //change CSS to avoid multiple click on button by disabling
        var btncolor = document.getElementById("btnColorApply");
        btncolor.style.backgroundColor = "#b6ccb7";
        btncolor.disabled = true;
    }
    else {
        alert("Select at least one color from Color List");
    }
}

function Clear() {
    var mytextbox = document.getElementById('userInput');
    if (mytextbox.innerHTML != "") {
        ColorArray = []; // Clears the array
        mytextbox.innerHTML = "";
    }
    else {
        alert("Nothing to Clear");
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/*------------------------Additional Javascript code for CodeText1.html ------------------------------*/


function ApplyColor1() {

    var defaultpara = document.getElementById("paragraph");

    if (document.getElementById('userInput').value != "") {

        // Check if array is not empty
        if (ColorArray.length != 0) {
            var text = defaultpara.innerHTML.trim().split('');
            var sstr = "";
            var index = 0;
            for (var j = 0; j < text.length; j++) {
                if (index == ColorArray.length) {
                    index = 0;
                }
                sstr += '<span style="color:' + ColorArray[index] + ';">' + text[j] + '</span>';
                index++;
            }
        }
        defaultpara.innerHTML = sstr;

        //change CSS to avoid multiple click on button by disabling
        var btncolor = document.getElementById("btnColorApply");
        btncolor.style.backgroundColor = "#b6ccb7";
        btncolor.disabled = true;
    }
    else {
        alert("Enter at least one valid color");
    }
}

function ValidateColors() {

    ColorArray = [];
    var stextcolors = document.getElementById("userInput").value;   
    if (stextcolors != "") {
        stextcolors = stextcolors.replace(/,;\s*$/, "");
        var isValid = /^[A-Za-z, ; ]*$/.test(stextcolors);
        if (isValid == true) {
            var stext = stextcolors.split(/[;,]+/);
            for (var i = 0; i < stext.length; i++) {
                if (sCheckIfValidColor(stext[i]) == true) {
                    const check = ColorArray.includes(stext[i]);
                    if (check == false) {
                        ColorArray.push(stext[i]);
                    }
                    else {
                        alert("Donot repeat color " + stext[i]);
                    }
                }
                else {
                    alert("Not a valid color in the list");
                    ColorArray = [];
                    break;
                }
            }

            if (ColorArray.length > 0 && ColorArray.length == stext.length) {
                var btnVal = document.getElementById("btnValidate");
                btnVal.textContent = "Validated";
                btnVal.style.backgroundColor = "#b6ccb7";
                alert("Validated");
            }
        }
        else {
            alert("Add Proper Color or Color List");
        }
    }
    else {
        alert("Nothing to Validate");
    }
}

function sCheckIfValidColor(color) {
    var color2 = "";
    var result = true;
    var e = document.getElementById('mydiv');
    e.style.borderColor = "";
    e.style.borderColor = color;
    color2 = e.style.borderColor;
    if (color2.length == 0) { result = false; }
    e.style.borderColor = "";
    return result;
}

function Clear1() {
    var mytextbox = document.getElementById('userInput');
    if (mytextbox.value != "") {
        ColorArray = []; // Clears the array
        mytextbox.value = "";
    }
    else {
        alert("Nothing to Clear");
    }
}

function ChangeCSSValidButton() {
    var btnVal = document.getElementById('btnValidate');
    btnVal.style.backgroundColor = "#4CAF50";
    btnVal.textContent = 'Validate';
}

/*----------------------Common Method--------------------------------------*/

function Reset() {
    window.location.reload();
}


