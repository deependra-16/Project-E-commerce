import base_url from "../exports.js"

console.log(base_url,"i am url")

function getMobileNumberFromInput() {
    let password = document.getElementById("showpassoword")
    let input = document.getElementById("exampleInputEmail1");
    let value = input.value
    if (value.length != 10) {
        console.log(input.classList[0], "i am classes")
        input.classList.remove("form-control")
        input.focus()
        input.classList.add("form-control-after")

        alert("Mobile number must be of 10 digit")

    } else if (value[0] != "9" && value[0] != "8" && value[0] != "7" && value[0] != "6") {
        alert("Moblie number must start with 9,8,7 or 6")``
        input.classList.remove("form-control")
        input.focus()
        input.classList.add("form-control-after")
    } else {
        input.classList.remove("form-control-after");
        input.classList.add("form-control-active");
        signInRequest(value, password.value)
    }
    console.log(value[0])
}



let form = document.getElementById("signin-form")
function submitForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', submitForm)

function show() {
    let input = document.getElementById("showpassoword")
    if (input.type === "password") {
        input.type = "text";

    } else if (input.type === "text") {
        input.type = "password";
    }
}

function signInRequest(mobile, password) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "mobile": mobile,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`${base_url}/api/v1/auth/signin/request`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if (result.success && result.message == "Successfully completed the request" && result.data) {
                localStorage.setItem("uuid",response.data)
                console.log("otp sended successfully")
                window.location.href = '/otp page'
                document.getElementById("showpassoword").value = ""
                document.getElementById("exampleInputEmail1").value = ""
            } else if (!result.success) {
                console.log(error.explanation[0])
            } else {
                console.log("something went wrong please try again later")
            }
        })
        .catch((error) => console.error(error));
}
