let quickSortBtn = document.querySelector("#quickSort")
quickSortBtn.addEventListener("click", function () { quickSort(bars, 0, bars.length - 1) });

function swap(arr, xp, yp) {
    var temp = arr[xp].style.height;
    arr[xp].style.height = arr[yp].style.height;
    arr[yp].style.height = temp;
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {

    // pivot
    let pivot = parseInt(arr[high].style.height);

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller
        // than the pivot
        if (parseInt(arr[j].style.height) < pivot) {

            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
async function quickSort(arr, low, high) {
    if (low < high) {

        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);

        // Separately sort elements before
        // partition and after partition
        arr[low].style.background = "black";
        arr[pi - 1].style.background = "black";
        await new Promise(resolve => setTimeout(() => { resolve(), delay(speedSort) }));
        quickSort(arr, low, pi - 1);
        arr[low].style.background = "red";
        arr[pi - 1].style.background = "red";
        arr[pi + 1].style.background = "black";
        arr[high].style.background = "black";
        await new Promise(resolve => setTimeout(() => { resolve(), delay(speedSort) }));
        quickSort(arr, pi + 1, high);
        arr[pi + 1].style.background = "red";
        arr[high].style.background = "red";
    }
}