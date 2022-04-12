let heapifySortBtn = document.querySelector("#heapifySort")
heapifySortBtn.addEventListener("click", function () { heapSort(bars, bars.length) });

function swap(arr, xp, yp) {
    var temp = arr[xp].style.height;
    arr[xp].style.height = arr[yp].style.height;
    arr[yp].style.height = temp;
}

async function maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)) {
        largest = l;
    }

    // If right child is smaller than smallest so far 
    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)) {
        largest = r;
    }

    // If smallest is not root 
    if (largest != i) {
        swap(arr, i, largest)
        // Recursively heapify the affected sub-tree 
        maxHeapify(arr, n, largest);
    }
}

// main function to do heap sort 
const heapSort = (arr, n) => {
    // Build heap (rearrange array) 
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        maxHeapify(arr, n, i);
    }

    // One by one extract an element from heap 
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end
        swap(arr, 0, i);
        // call max heapify on the reduced heap 
        maxHeapify(arr, i, 0);
    }
}