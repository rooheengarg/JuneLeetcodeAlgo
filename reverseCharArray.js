var reverseString = function(s) {
    if(s.length==1) return s;
    let p1 = Math.floor(s.length/2)-1;
    let p2 = s.length % 2 == 0 ? Math.floor(s.length/2) : Math.floor(s.length/2)+1;
    while(p1>=0){
        [s[p1], s[p2]] = [s[p2], s[p1]];
        p1--;
        p2++;
    }
    return s;
};

//O(1) complexity , mainting two pointers and expanding outwards
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]