class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get print() {
    console.log(this.heap);
  }

  get max() {
    return this.heap[0] || null;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  siftUp(index) {
    let siftUpNodeIndex = index;
    while (
      siftUpNodeIndex !== 0 &&
      this.heap[siftUpNodeIndex] > this.heap[this.parent(siftUpNodeIndex)]
    ) {
      const siftUpNodeIndexParent = this.parent(siftUpNodeIndex);
      this.swap(siftUpNodeIndex, siftUpNodeIndexParent);
      siftUpNodeIndex = siftUpNodeIndexParent;
    }
  }

  siftDown(index) {
    let siftDownNodeIndex = index;
    let siftDownNodeLeftChildIndex = this.leftChild(siftDownNodeIndex);
    let siftDownNodeRightChildIndex = this.rightChild(siftDownNodeIndex);
    while (
      this.heap[siftDownNodeIndex] < this.heap[siftDownNodeLeftChildIndex] ||
      this.heap[siftDownNodeIndex] < this.heap[siftDownNodeRightChildIndex]
    ) {
      if (
        this.heap[siftDownNodeLeftChildIndex] >
        this.heap[siftDownNodeRightChildIndex]
      ) {
        this.swap(siftDownNodeLeftChildIndex, siftDownNodeIndex);
        siftDownNodeIndex = siftDownNodeLeftChildIndex;
      } else {
        this.swap(siftDownNodeRightChildIndex, siftDownNodeIndex);
        siftDownNodeIndex = siftDownNodeRightChildIndex;
      }
      siftDownNodeLeftChildIndex = this.leftChild(siftDownNodeIndex);
      siftDownNodeRightChildIndex = this.rightChild(siftDownNodeIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  extractMax() {
    if (!this.heap.length) {
      return null;
    }
    const maxValue = this.heap[0];
    if (this.heap.length === 1) {
      this.heap.pop();
    } else {
      this.swap(0, this.heap.length - 1);
      this.heap.pop();

      if (this.heap.length === 2) {
        if (this.heap[0] < this.heap[1]) {
          this.swap(0, 1);
        }
      } else {
        this.siftDown(0);
      }
    }
    return maxValue;
  }

  build(array) {
    this.heap = array;
    for (let i = this.heap.length - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  get sorted() {
    const heapCopy = [...this.heap];
    const sorted = [];
    while (heap.max !== null) {
      sorted.push(heap.extractMax());
    }
    return sorted;
  }
}

// Create a new heap and insert some elements
const heap = new MaxHeap();
heap.insert(5);
heap.insert(10);
heap.insert(3);
heap.insert(8);

// Verify that the heap is correctly constructed
heap.print; // [10, 8, 3, 5]

// Extract the maximum element and verify that it is correct
const max1 = heap.extractMax();
console.log(max1); // 10

// Insert some more elements and verify that the heap is still correct
heap.insert(12);
heap.insert(1);
heap.print; // [12, 8, 3, 5, 1]

// Build a new heap from an array and verify that it is correct
const array = [4, 7, 2, 9, 6];
heap.build(array);
heap.print; // [9, 7, 4, 2, 6]

// Extract all the elements from the heap and verify that they are in descending order
console.log(heap.sorted); // [9, 7, 6, 4, 2]
