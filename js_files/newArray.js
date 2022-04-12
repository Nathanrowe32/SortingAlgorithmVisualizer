let arr_size = document.querySelector("#arr_sz");
let sortSpeed = document.querySelector("#speed_scale");
let newArrayBtn = document.querySelector("#newArray")
arr_size.addEventListener("input", function () { createBars() });
arr_size.addEventListener("input", function () { updateLabel() });
sortSpeed.addEventListener("input", function () { createBars() });
sortSpeed.addEventListener("input", function () { updateLabel() });
var speedSort = 5;
var numBars = 60;
newArrayBtn.addEventListener("click", function () { createArray(numBars) });
const barChart = document.getElementById("barChart");
var heightBars = [];
var bars = [];

window.onload = function () {
    createArray(numBars);
}

function createArray(numBars) {
    console.log(numBars);
    //clear the arrays
    clearArray();

    //generate heights
    for (let i = 0; i < numBars; i++) {
        heightBars.push(Math.floor(Math.random() * 500));
    }

    //generate the bars
    for (let i = 0; i < numBars; i++) {
        var bar = document.createElement('div');
        bar.className = "bar";
        bar.classList.add("bar");
        bar.style.height = heightBars[i].toString() + "px";
        bars.push(bar);
        barChart.appendChild(bar);
    }
    console.log(bars);
}


//function that initializes the barChart
function clearArray() {
    let firstChild = barChart.firstChild;
    while (barChart.firstChild) {
        barChart.removeChild(firstChild);
        firstChild = barChart.firstChild;
    }

    heightBars = [];
    bars = [];
}

function createBars() {
    numBars = arr_size.value;
    speedSort = sortSpeed.value;
}

function updateLabel() {
    document.querySelector("#numBarsLabel").innerHTML = arr_size.value;
    document.querySelector("#speedLabel").innerHTML = sortSpeed.value;
}

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}