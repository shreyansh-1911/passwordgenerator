let inputbox = document.querySelector("#inputbox");
let slider = document.querySelector("#slider-value");
let slider_value = document.querySelector(".length p");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let btn = document.querySelector(".btn");
let copyicon = document.querySelector("#copyIcon");

slider.addEventListener("input", function () {
    slider_value.innerHTML = slider.value
})
btn.addEventListener("click", function () {
    inputbox.value = generatePassword();
})
let alllowercase = "abcdefghijklmnopqrstuvxyz";
let alluppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumber = "1234567890";
let allsymbol = "!@#$%^&*";

function generatePassword() {
    let password = "";

    let allchars = "";
    allchars += lowercase.checked ? alllowercase : "";
    allchars += uppercase.checked ? alluppercase : "";
    allchars += number.checked ? allnumber : "";
    allchars += symbol.checked ? allsymbol : "";

    if (allchars == "" || allchars.length == 0) {
        return password;
    }
    else {
        let i;
        for (i = 0; i < slider.value; i++) {
            password += allchars.charAt(Math.floor(Math.random() * allchars.length));
        }
        return password;
    }

}

copyicon.addEventListener('click', function () {
    if (inputbox.value.length > 0) {
        navigator.clipboard.writeText(inputbox.value);
        copyicon.innerHTML = "check";
        copyicon.title = "Password Copied";

        setTimeout(() => {
            copyicon.innerHTML = "content_copy";
            copyicon.title = "";
        }, 2700)
    }
});


