var isSubsequence = function(s, t) {
    if (t.length === 0 && s.length === 0) return true;
    if (s.length > t.length) return false;
    
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[j]) j++;
        if (s.length === j) return true;
    }

    return false;
};

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Input: s = "axc", t = "ahbgdc"
// Output: false