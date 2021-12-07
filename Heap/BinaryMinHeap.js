class MinHeap {
  constructor() {
    this.underlyingArray = [];
    this.size = 0;
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
}

/**
 * Swaps two values in the underlying array
 * Time complexity: O(1)
 */
MinHeap.prototype.swap = function (index1, index2) {
  let temp = this.underlyingArray[index1];
  this.underlyingArray[index1] = this.underlyingArray[index2];
  this.underlyingArray[index2] = temp;
};

/**
 * Inserts data into the heap
 * Time complexity: O(log(n))
 */
MinHeap.prototype.insert = function (data) {
  this.underlyingArray[this.size] = data;
  this.size++;
  for (
    let i = this.size - 1;
    i != 0 && this.underlyingArray[this.parent(i)] > this.underlyingArray[i];
    i = this.parent(i)
  ) {
    this.swap(i, this.parent(i));
  }
};

/**
 * Heapify: Reshapes binary tree into the min heap
 * Time complexity: O(h), O(log(n))
 */

MinHeap.prototype.heapify = function (index) {
  let leftChild = this.leftChild(index);
  let rightChild = this.rightChild(index);
  let rootValue = this.underlyingArray[index];
  let leftValue = this.underlyingArray[leftChild];
  let rightValue = this.underlyingArray[rightChild];

  // if root is smallest
  let smallest = index;

  // If left child is the smallest
  if (leftChild < this.size && leftValue < rootValue) {
    smallest = leftChild;
  }

  // if right child is the smallest
  if (rightChild < this.size && rightValue < smallest) {
    smallest = rightChild;
  }

  if (smallest != index) {
    this.swap(smallest, index);
    this.heapify(smallest);
  }
};

MinHeap.prototype.extractMin = function () {
  if (this.size <= 0) {
    return Infinity;
  }
  if (this.size == 1) {
    this.size--;
    return this.underlyingArray[this.size];
  }
  this.swap(0, this.size - 1);
  this.size--;
  this.heapify(0);
  return this.underlyingArray[this.size];
};

function main() {
  let heap = new MinHeap();
  heap.insert(5);
  heap.insert(6);
  heap.insert(3);
  console.log(heap.underlyingArray); // [3, 6, 5]
  console.log(heap.underlyingArray.toString()); // 3,6,5; joined each element with ','
  console.log(heap.extractMin()); // 3
  console.log(heap.underlyingArray); // [5, 6, 3]; valid till index 1
}

main();
