class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];
        let res = [];
        let product = 1;
        for(let i = 0; i < nums.length; i++) {
            product = product * nums[i];
            prefix[i] = [product];
        }

        product = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            product = product * nums[i];
            suffix[i] = [product];
        }

        for(let i = 0; i < nums.length; i++) {
            res[i] = (i - 1 >= 0 ? prefix[i - 1] : 1) * (i + 1 < nums.length ? suffix[i + 1] : 1);
        }
        return res;
    }
}
