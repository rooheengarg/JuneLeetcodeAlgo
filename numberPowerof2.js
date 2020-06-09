var isPowerOfTwo = function(n) {
    let val = 0;
    let i = 0;
    while(val <= n) {
        val =  Math.pow(2, i);
        if(val === n) {
            return true;
        } else {
            i++;
        }
    }
    return false;
    
};

//or 

var isPowerOfTwo = function(n) {
    return Math.log2(n)%1 === 0
};

//or 

var isPowerOfTwo = function(n) {
    if (n == 1){
       return true;
     }
     while(n % 2 == 0 && n !== 0) {
       if (n == 2) {
         return true;
       }
       n = n / 2;
     }
     return false; 
   };

//    Input: 16
// Output: true
// Explanation: 24 = 16