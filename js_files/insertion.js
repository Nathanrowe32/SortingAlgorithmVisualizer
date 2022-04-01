let insertionSortBtn = document.querySelector("#insertionSort")
insertionSortBtn.addEventListener("click", function () { insertionSort(bars, bars.length) });

function swap(arr, xp, yp) {
    var temp = arr[xp].style.height;
    arr[xp].style.height = arr[yp].style.height;
    arr[yp].style.height = temp;

}

async function insertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        let value1 = parseInt(arr[i].style.height);
        key = value1;
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && parseInt(arr[j].style.height) > key) {
            arr[j].style.background = "black";
            arr[j + 1].style.background = "black";
            await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
            swap(arr, j + 1, j);
            arr[j].style.background = "red";
            arr[j + 1].style.background = "red";
            j = j - 1;
        }
        arr[j + 1].style.height = key;
    }
}
