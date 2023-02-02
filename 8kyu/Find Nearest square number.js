// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

//SOLUTION
function nearestSq(n){
    let i = 0;
     while (i * i <= n) {
       i++;
     }
     let lower = i - 1;
     let upper = i;
     return (n - lower * lower) <= (upper * upper - n) ? lower * lower : upper * upper;
   }
   