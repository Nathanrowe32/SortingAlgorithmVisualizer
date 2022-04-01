let bubbleSortBtn = document.querySelector("#bubbleSort")
bubbleSortBtn.addEventListener("click", function () { bubbleSort(bars, bars.length) });

function swap(arr, xp, yp) {
    var temp = arr[xp].style.height;
    arr[xp].style.height = arr[yp].style.height;
    arr[yp].style.height = temp;

}

async function bubbleSort(arr, n) {
    var i, j;
    var swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            let value1 = parseInt(arr[j].style.height);
            let value2 = parseInt(arr[j + 1].style.height);

            if (value1 > value2) {

                arr[j].style.background = "black";
                arr[j + 1].style.background = "black";
                await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
                swap(arr, j, j + 1);
                arr[j].style.background = "red";
                arr[j + 1].style.background = "red";
                swapped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }
}

