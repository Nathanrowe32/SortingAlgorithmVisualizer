let selectionSortBtn = document.querySelector("#selectionSort")
selectionSortBtn.addEventListener("click", function () { selectionSort(bars, bars.length) });

function swap(arr, xp, yp) {
    var temp = arr[xp].style.height;
    arr[xp].style.height = arr[yp].style.height;
    arr[yp].style.height = temp;
}

async function selectionSort(arr, n) {
    var i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            let value1 = parseInt(arr[j].style.height);
            let value2 = parseInt(arr[min_idx].style.height);
            if (value1 < value2) {
                min_idx = j;
            }
            arr[j].style.background = "black";
            arr[min_idx].style.background = "black";
            await new Promise(resolve => setTimeout(() => { resolve(), delay(speedSort) }));
            swap(arr, min_idx, i);
            arr[j].style.background = "red";
            arr[min_idx].style.background = "red";
        }
    }
}
