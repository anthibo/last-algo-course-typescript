export default class MinHeap {
    public length: number;
    private data: number[]


    constructor() {
        this.length = 0;
        this.data = []
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out;
    }

    private heapifyDown(index: number) {
        const leftChildIndex = this.getLeftChildIndex(index)
        const rightChildIndex = this.getRightChildIndex(index)

        if (index >= this.length || leftChildIndex >= this.length) {
            return
        }
        const leftChildValue = this.data[leftChildIndex];
        const rightChildValue = this.data[rightChildIndex];
        const currentValue = this.data[index];

        if (leftChildValue > rightChildValue && currentValue > rightChildValue) {
            this.data[index] = rightChildValue;
            this.data[rightChildIndex] = currentValue;
            this.heapifyDown(rightChildIndex);
        }

        if (leftChildValue < rightChildValue && currentValue > leftChildValue) {
            this.data[index] = leftChildValue;
            this.data[leftChildIndex] = currentValue;
            this.heapifyDown(leftChildIndex);
        }


    }

    private heapifyUp(index: number) {
        if (index === 0) {
            return;
        }
        const parentIndex = this.getParentIndex(index);
        const parentValue = this.data[parentIndex];
        const currentValue = this.data[index]

        if (parentValue > currentValue) {
            // swap elements
            this.data[index] = parentValue;
            this.data[parentIndex] = currentValue;
            this.heapifyUp(parentIndex);
        }
    }

    private getParentIndex(index: number) {
        return Math.floor((index - 1) / 2)
    }

    private getLeftChildIndex(index: number) {
        return (index * 2) + 1
    }

    private getRightChildIndex(index: number) {
        return (index * 2) + 2
    }

}