class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue;

            let l = i + 1, r = nums.length - 1;

            while (l < r) {
                let subTotal = nums[i] + nums[l] + nums[r];
                if (subTotal > 0) {
                    r--;
                } else if (subTotal < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l-1]) {
                        l++;
                    }
                }
            } 
        }

        return res;
    }
}
