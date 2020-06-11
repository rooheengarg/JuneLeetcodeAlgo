var sortColors = function(nums) {
    var zero = 0;
    var two = nums.length - 1;
    for(var i=0; i<=two; i++){
        while(nums[i] === 2 && i !== two){
           [nums[two], nums[i]] = [nums[i], nums[two]];
            two--;
        }
        while(nums[i] === 0 && i !== zero){
            [nums[zero], nums[i]] = [nums[i], nums[zero]];
            zero++;
        }
    }
};


// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]