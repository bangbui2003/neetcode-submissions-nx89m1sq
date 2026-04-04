class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temparr = [];
        let index = 0;
        nums.forEach((num) => {
            if(temparr.includes(num))
            {
                return true;
            }
            temparr.push(num);
            index++;
        })
        if(index === nums.length) return false;
        return true;
    }
}
