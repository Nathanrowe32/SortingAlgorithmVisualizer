let newArrayBtn = document.querySelector("#newArray")
newArrayBtn.addEventListener("click", createArray);
const barChart = document.getElementById("barChart");

var heightBars = [];
var bars = [];
const numBars = 100;

function createArray() {

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