let newArrayBtn = document.querySelector("#newArray")
newArrayBtn.addEventListener("click", createArray);
const barChart = document.getElementById("barChart");

var heightBars = [];
var bars = [];

function createArray() {

    //clear the arrays
    clearArray();

    //generate heights
    for (let i = 0; i < 10; i++) {
        heightBars.push(Math.floor(Math.random() * 1000));
    }

    //generate the bars
    for (let i = 0; i < 10; i++) {
        var bar = document.createElement('th');
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