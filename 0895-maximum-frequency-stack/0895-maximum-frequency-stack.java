class FreqStack {
        private HashMap<Integer, Integer> freqMap;
        private int maxFreq;
        private HashMap<Integer, ArrayList<Integer>> elementMap;

    public FreqStack() {
        freqMap = new HashMap<>();
        maxFreq = 0;
        elementMap = new HashMap<>();
    }
    
    public void push(int val) {
        if(!freqMap.containsKey(val)){
            freqMap.put(val, 1);
        }else{
            int freq = freqMap.get(val);
            freqMap.put(val, freq+1);
        }

        maxFreq = Math.max(maxFreq, freqMap.get(val));

        if(!elementMap.containsKey(freqMap.get(val))){
            elementMap.put(freqMap.get(val), new ArrayList<>());
            elementMap.get(freqMap.get(val)).add(val);
        }else{
            elementMap.get(freqMap.get(val)).add(val);
        }
    }
    
    public int pop() {
        ArrayList<Integer> arr = elementMap.get(maxFreq);
        int result = arr.get(arr.size() - 1);
        arr.remove(arr.size() - 1);
        freqMap.put(result, freqMap.get(result) -1);

        if(arr.isEmpty()){
            elementMap.remove(maxFreq);
        
            maxFreq--;
        }
        return result;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.push(val);
 * int param_2 = obj.pop();
 */