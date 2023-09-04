//Counting Bits

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

var countBits = function(n) {
    let arr=[]
    let temp
    function conTo(temp){
               temp=temp.split("")
               let sum=0
               for(let k=0;k<temp.length;k++){
                   if(temp[k]==1){
                       sum++
                   }
               }
               return sum
    }

    for(let i=0;i<n+1;i++){
        temp=i.toString(2)
        arr.push(conTo(temp))
    }
    return arr
};