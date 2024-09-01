function findKthLargest(arr, k) {
 
    const minHeap = [];
    
    for (let i = 0; i < arr.length; i++) {

        minHeap.push(arr[i]);

        minHeap.sort((a, b) => a - b);
        if (minHeap.length > k) {
            minHeap.shift(); 
        }
    }
  
    return minHeap[0];
}

const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(arr, k));  // Output: 5
