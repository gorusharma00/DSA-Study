class Solution {
    public static PriorityQueue<Integer> heap;

    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        heap = new PriorityQueue<>(Collections.reverseOrder());

        double[][] workers = new double[quality.length][2];
        for(int i = 0; i < quality.length; i++){
            double ratio =  (double) wage[i] / quality[i];
            workers[i][0] = ratio;
            workers[i][1] = quality[i]; 
        }

        Arrays.sort(workers, (a, b) -> Double.compare(a[0], b[0]));

        int totalQuality = 0;
        double ans = Double.MAX_VALUE;

        for(int i = 0; i < workers.length; i++){
            totalQuality += workers[i][1];
            double ratio = workers[i][0];

            heap.add((int)workers[i][1]);

            if(heap.size() > k){
                totalQuality -= heap.poll();
            }

            if(heap.size() == k){
                ans = Math.min(ans, totalQuality * ratio);
            }
        }

        return ans;
    }
}