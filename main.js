'use strict'

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, num) {
    for(let i = 0;i <= arr.length;i++) {
        if(i === num) {
            arr.splice(i-1, 1);
        }
    }
    return arr;
}

removeElement(array, 5 );
console.log(array);