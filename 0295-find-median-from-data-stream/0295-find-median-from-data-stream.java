class MedianFinder {
    public static PriorityQueue<Integer> rightminHeap;
    public static PriorityQueue<Integer> leftmaxHeap;

    public MedianFinder() {
        rightminHeap = new PriorityQueue<Integer>();
        leftmaxHeap = new PriorityQueue<Integer>(Collections.reverseOrder());
    }
    
    public void addNum(int num) {
        if(leftmaxHeap.isEmpty() || num < leftmaxHeap.peek()){
            leftmaxHeap.add(num);
        }else{
            rightminHeap.add(num);
        }

        if(Math.abs(leftmaxHeap.size() - rightminHeap.size()) > 1){
            rightminHeap.add(leftmaxHeap.poll());
        }else if(leftmaxHeap.size() < rightminHeap.size()){
            leftmaxHeap.add(rightminHeap.poll());
        }
    }
    
    public double findMedian() {
        if(leftmaxHeap.size() == rightminHeap.size()){
            return (double)(leftmaxHeap.peek() + rightminHeap.peek()) / 2;
        }

        return leftmaxHeap.peek();
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */