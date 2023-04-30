// Implement a min Heap - minimum value at root.
// Heap is a complete binary tree
// It is stored as array. Always start with index 1.
// Parent  Math.floor(idx/2)
// Left Childern: idx * 2
// Right Childern: idx * 2 + 1
// Add new value to bottom and propagate upwards.
// Remove always root node and move last element to root node and sort again.

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  print() {
    console.log(this.heap);
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(value) {
    this.heap.push(value);
    if (this.heap.length <= 2) {
      return;
    } else {
      let newItemIdx = this.heap.length - 1;
      while (
        this.heap[newItemIdx] < this.heap[this.getParent(newItemIdx)] &&
        newItemIdx > 0
      ) {
        [this.heap[newItemIdx], this.heap[this.getParent(newItemIdx)]] = [
          this.heap[this.getParent(newItemIdx)],
          this.heap[newItemIdx],
        ];
        newItemIdx = this.getParent(newItemIdx); // move new item index to its parent.
      }
    }

    return this.heap[1]; // returning smallest item.
  }

  remove() {
    const smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();
      if (this.heap.length === 3) {
        // if there are only items we simply swap.
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
          return smallest;
        }
      }
      let parentIdx = 1;
      let leftChild = this.getLeftChild(1);
      let rightChild = this.getRightChild(1);
      while (
        this.heap[parentIdx] > this.heap[leftChild] ||
        this.heap[parentIdx] > this.heap[rightChild]
      ) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          [this.heap[parentIdx], this.heap[leftChild]] = [
            this.heap[leftChild],
            this.heap[parentIdx],
          ];
          parentIdx = this.getLeftChild(parentIdx);
        } else {
          [this.heap[parentIdx], this.heap[rightChild]] = [
            this.heap[rightChild],
            this.heap[parentIdx],
          ];
          parentIdx = this.getRightChild(parentIdx);
        }

        leftChild = this.getLeftChild(parentIdx);
        rightChild = this.getRightChild(parentIdx);
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return null;
    }
    return smallest;
  }
}

const h = new MinHeap();
// h.print();
// h.insert(5);
// h.insert(2);
// h.insert(10);
// h.insert(50);
// console.log(h.remove());
// h.print();
// console.log(h.remove());
// h.print();
// console.log(h.remove());
// h.print();
// console.log(h.remove());
// h.print();
// console.log(h.remove());
// h.print();
// console.log(h.remove());
// h.print();

h.print();
h.insert(5);
h.insert(2);
h.insert(10);
h.insert(50);
h.print();
h.insert(1);
h.print();
h.insert(0);
h.insert(51);
h.insert(12);
h.print();
h.insert(50);
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
console.log(h.remove());
h.print();
