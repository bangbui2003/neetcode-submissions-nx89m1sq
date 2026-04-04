class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // [1,2,1,0,4,2,6]
        // 1 2 1 => max = 2
        // 2 1 0 => max = 2
        // 1 0 4 => shift 2 -> max = 4
        // 0 4 2 =>
        const n = nums.length;
        let output = new Array(n - k + 1);
        let q = new Deque();

        let l = 0,
            r = 0;

        while (r < n) {
            // ensure the queue have max numbers in descending order
            while (q.size() && nums[q.back()] < nums[r]) {
                q.popBack();
            }

            q.pushBack(r);

            if (l > q.front()) {
                q.popFront();
            }

            if (r + 1 >= k) {
                output[l] = nums[q.front()];
                l++;
            }

            r++;
        }

        return output;
    }
}