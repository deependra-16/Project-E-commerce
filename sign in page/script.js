
function getMobileNumberFromInput(){
    let input =  document.getElementById("exampleInputEmail1");
    let value = input.value
    if(value.length!=10){
        console.log(input.classList[0],"i am classes")
        input.classList.remove("form-control")
        input.focus()
        input.classList.add("form-control-after")

        alert("Mobile number must be of 10 digit")
        
    } else if(value[0]!="9" && value[0]!="8" && value[0]!="7" && value[0]!="6"){
        alert("Moblie number must start with 9,8,7 or 6")``
        input.classList.remove("form-control")
        input.focus()
        input.classList.add("form-control-after")
    } else{
        input.classList.remove("form-control-after");
        input.classList.add("form-control-active")
    }
    console.log(value[0])
}



let form  = document.getElementById("signin-form")
function submitForm(event){
    event.preventDefault();
}
form.addEventListener('submit',submitForm)


// let input =  document.getElementById("exampleInputEmail1");
// input.addEventListener('focus',function(e){
//     console.log("clicked")
//     this.style.boxShadow = "0 0 0 .25rem red"
// })


function show(){
      let input = document.getElementById("showpassoword")
      if (input.type === "password") {
        input.type = "text";
        
      }else if(input.type === "text"){
        input.type = "password";
      }
}