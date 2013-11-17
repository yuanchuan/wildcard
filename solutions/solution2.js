
var g = [ 9, 10, 21, 20, 7, 11, 4, 15, 7, 7, 14, 5, 20, 6, 29, 8, 11, 19, 18, 22, 29, 14, 27, 17, 6, 22, 12, 18, 18, 30 ];
var o = [ 21, 16, 19, 26, 26, 7, 1, 8, 17, 14, 15, 25, 20, 3, 24, 5, 28, 9, 2, 14, 9, 25, 15, 13, 15, 9, 6, 20, 27, 22 ];
var budget = 2912;

// Formula: 
//  f(i) -> g[i] + o[i] * (max - i + 1)      
var f = function(i, max) {
  return g[i] + o[i] * (max - i + 1);
} 

var sum = function(max) {
  var sum = 0;
  for (var i = 0; i < max; ++i) {
    sum += f(i, max); 
  }
  return sum;
}

// Find the maximum of cards within the given budgeted time.
for (var card = 1; card < 30; ++card) {
  if ( sum(card) >= budget ) {
    // minus 1 because the sum must be less than the budget
    // add 1 because the index in the `sum` function begins at 0.
    console.log(card - 1 + 1);
    break;
  }
}

