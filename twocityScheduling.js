// Sort based off difference between a and b for each person. (Guarantees biggest savings.)
// Pick min between cities until you hit cap of counts.length/2
// Pick other city until end of loop.

var twoCitySchedCost = function(costs) {
    let total = 0;
    let a_count = 0;
    let b_count = 0;
    let n = costs.length/2;
    
    // sort based off difference of city a and city b
    costs.sort( (a,b) => {
        const a_diff = a[0] > a[1] ? a[0] - a[1] : a[1] - a[0];
        const b_diff = b[0] > b[1] ? b[0] - b[1] : b[1] - b[0];
        return b_diff - a_diff;
    });
    
    for(let i = 0; i < costs.length; i++) {
        if(a_count == n) {
            total+=costs[i][1];
        } else if(b_count == n) {
            total+=costs[i][0];
        } else {
            const a = costs[i][0];
            const b = costs[i][1];   
            if(a < b) {
                total+=a; 
                a_count++;
            } else {
                total+=b;
                b_count++;
            }   
        }
    }
    return total;
};

// Method 2
// [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
var twoCitySchedCost = function(costs) {
    costs = costs.sort((a,b) => (b[0] - b[1]) - (a[0] - a[1]));
    var minCost = 0, i;
    for(i = 0; i < costs.length/2; i++){
        minCost += costs[i][1];
    }
    for(i = costs.length/2; i < costs.length; i++){
        minCost += costs[i][0];
    }
    return minCost;
};