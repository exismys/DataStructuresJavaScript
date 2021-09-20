let binarySearch = function(array, element) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] == element) {
            return mid;
        } else if (array[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

let array = [10, 20, 50, 60, 65, 70, 80, 90];
console.log(binarySearch(array, 20));
console.log(binarySearch(array, 70));