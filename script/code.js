let height = document.querySelector("#l");
let weight = document.querySelector("#kg");
let result = document.querySelector(".num");
let sentence = document.querySelector(".statement")
let enter = document.querySelector("#calculate");

enter.addEventListener("click", ()=>{
    let tall = height.value;
    let mass = weight.value;
    let BMI = mass/(tall * (tall/10000));
    BMI = BMI.toFixed(2)
    result.innerText = BMI;

    if(BMI < 18.5){
        sentence.innerText = "underweight";
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        sentence.innerText = "normal";
    }else if((BMI > 25) && (BMI <= 29.9)){
        sentence.innerText = "overweight";
    }else{
        sentence.innerText = "obese";
    }
})

document.querySelector("#clear").
addEventListener("click", ()=>{
    let remove = height.value; weight.value; sentence.innerHTML; result.innerHTML;
    height.value = "";
    weight.value = "";
    sentence.innerHTML = "";
    result.innerHTML = "";
})