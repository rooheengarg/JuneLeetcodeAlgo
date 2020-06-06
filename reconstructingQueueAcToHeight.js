// Suppose you have a random list of people 
// standing in a queue. Each person is described 
// by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h.
//  Write an algorithm to reconstruct the queue.

// Input:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

// Output:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

// SOLUTION


// We can first sort the array by two rules:

// if two elelemts, a and b, a[0] == b[0], sort by its second array element in ascending order, i.e., sort by a[1] - b[1]
// if two elements, a and b, a[0] != b[0], sort by its first array ellement in descending order, i.e., sort by b[0] - a[0]
// Thus, the sorting result for [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]] would be:
// [ [ 7, 0 ], [ 7, 1 ],
// [ 6, 1 ],
// [ 5, 0 ], [ 5, 2 ],
// [ 4, 4 ] ]

// Then for each element in the sorted array, we put it in the result according to its second array element, i.e., a[1], which is the position of its real position in the result array. In JavaScript, splice function is provided.

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let sol = [];
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    for(let i=0; i<people.length; i++) {
        sol.splice(people[i][1], 0, people[i]);
    }
    
    return sol;
};