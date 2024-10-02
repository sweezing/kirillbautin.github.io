document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
    })

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");

let first = document.getElementById("first");
let second = document.getElementById("second");

const result = document.getElementById("result");

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "divider equels 0"
            break;
    }
    result.textContent = res;
};

plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
});

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
});



const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");      // assign our buttons to make event
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");

let trg = document.getElementById("trg");       // trg - our input from <input>

const res_trg = document.getElementById("val"); // take our value from output

let val = 0;                                    // def new var

function calculus_trg(word) {
    const num = parseFloat(trg.value) || 0;
    switch (word) {
        case "cos":
            val = Math.cos(num);
            break;
        case "sin":
            val = Math.sin(num);
            break;
        case "tg":
            val = (num % Math.PI) === (Math.PI/2) ? "error" : Math.tan(num)
            break;
        case "ctg":
            val = (num % Math.PI) === 0 ? "error" : 1/(Math.tan(num))
            break;
    }
    res_trg.textContent = val.toFixed(2);
};



cos.addEventListener("click", (event) => {
    event.preventDefault()
    calculus_trg("cos");
});

sin.addEventListener("click", (event) => {
    event.preventDefault()
    calculus_trg("sin");
});

tg.addEventListener("click", (event) => {
    event.preventDefault()
    calculus_trg("tg");
});

ctg.addEventListener("click", (event) => {
    event.preventDefault()
    calculus_trg("ctg");
});

document.getElementById("special").classList.add("special1")