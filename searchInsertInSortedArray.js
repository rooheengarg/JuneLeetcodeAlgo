var searchInsert = function(nums, target) {
    if (!nums.length) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }
    return nums.length;
};

// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1