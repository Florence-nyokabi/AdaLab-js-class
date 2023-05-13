function divideArray(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return sortedArray(divideArray(left), divideArray(right));
}

function sortedArray(left, right){
    let emptyArray = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift());
        }
    }
    return [...emptyArray,...left,...right];
}

let arr = [3, 10, 2, 50, 1, 4, 6];
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(divideArray(arr));












