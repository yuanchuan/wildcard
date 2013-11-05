
var fs = require('fs');
var input = fs.readFileSync('./input/problem1input.txt', 'utf-8');


var html = 
  '<table><tbody>' + 
    input
      .split(/\n/g)
      .filter(function(line) {
        return line.length;
      })
      .map(function(line) {
        return '' + 
          '<tr>' + 
            line
              .split('')
              .map(function(c) {
                return (c === '*' 
                  ? '<td class="star">'
                  : '<td>') + c + '</td>';
              }).join('') + 
          '</tr>'
      }).join('') + 
  '</tbody></table>';


var script = 
  '<script>(' + 
    (function() {
      function query() {
        return document.querySelectorAll.apply(document, arguments);
      }
      function factorial(num) {
        if (num <= 1) return 1;  
        return num * factorial(num - 1);
      }
      function permutation(n, r) {
        if (n < r) return 0;
        return factorial(n) / (factorial(n - r)) ;
      }
      document.body.innerHTML = (
        [].concat.call(
          [].map.call(query('tr'), function(row, i) {
            return query('tr:nth-child(' + (i + 1 + ') .star')).length;
          }),
          [].map.call(query('tr:first-child>td'), function(col, i) {
            return query('td.star:nth-child(' + (i + 1 + ')')).length;
          })
        )
        .map(function(num) {
          return permutation(num, 5);
        })
        .reduce(function(a, b) {
          return a + b;
        })
      )
      
    }).toString() + 
  ')()</script>'; 


console.log(
  html + script
)

