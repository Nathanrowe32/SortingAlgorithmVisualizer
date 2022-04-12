let selectionSortBtn = document.querySelector("#selectionSort")
selectionSortBtn.addEventListener("click", function () { selectionSort(bars, bars.length) });

function swap(arr, xp, yp) {
    var temp = arr[xp].style.height;
    arr[xp].style.height = arr[yp].style.height;
    arr[yp].style.height = temp;
}

async function selectionSort(arr, n) {
    for (var i = 0; i < n; i++) {
        let min_idx = i;
        for (var j = i + 1; j < n; j++) {
            let value1 = parseInt(arr[j].style.height);
            let value2 = parseInt(arr[min_idx].style.height);
            if (value1 < value2) {
                await delay(speedSort * .005);
                min_idx = j;

            }
        }
        if (min_idx != i) {
            arr[i].style.background = "black";
            arr[min_idx].style.background = "black";
            await delay(speedSort * .005);
            swap(arr, i, min_idx);
            arr[i].style.background = "red";
            arr[min_idx].style.background = "red";
        }
    }
}
