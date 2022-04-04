let mergeSortBtn = document.querySelector("#mergeSort")
mergeSortBtn.addEventListener("click", function () { mergeSort(bars, 0, bars.length - 1) });

function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = parseInt(arr[l + i].style.height);
    for (var j = 0; j < n2; j++)
        R[j] = parseInt(arr[m + 1 + j].style.height);

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k].style.height = L[i] + "px";
            i++;
        }
        else {
            arr[k].style.height = R[j] + "px";
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k].style.height = L[i] + "px";
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k].style.height = R[j] + "px";
        j++;
        k++;
    }
}

async function mergeSort(arr, l, r) {
    if (l >= r) {
        return;//returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    arr[l].style.background = "black";
    arr[r].style.background = "black";
    await new Promise(resolve => setTimeout(() => { resolve(), delay(2) }));
    merge(arr, l, m, r);
    arr[l].style.background = "red";
    arr[r].style.background = "red";
}