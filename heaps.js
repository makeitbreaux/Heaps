class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i-1) / 2)
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;
    }

    getRightChild(i) {
        return i * 2 + 2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(key) {
        this.data[this.data.length] = key;
        heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.data.length - 1;
        
        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]); {
            this.swap(currentIndex, this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);
        }
    }
}