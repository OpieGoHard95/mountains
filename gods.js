var GODS = [
  {name: "agni", favor: 1250, release: 1338436800000},
  {name: "ullr", favor: 5500, release: 1395201600000},
  {name: "athena", favor: 5500, release: 1370404800000},
  {name: "thor", favor: 0, release: 1346990400000},
  {name: "serqet", favor: 5500, release: 1405396800000},
  {name: "mercury", favor: 5500, release: 1380686400000},
  {name: "bellona", favor: 11000, release: 1424840400000},
  {name: "nox", favor: 5500, release: 1414555200000}
];

// if (typeof module != "undefined" && module.exports)
//
//  module.exports = GODS;

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// Attempting find gods created within the last year

print(filter(GODS, function(name) {
        return name.release > 1357016400000 ;
}));
// After this test runs it gives me the correct number of results however
// it prints them out as [Object object] rather than the God name as was called
// This needs to be fixed however, I have somewhat solved the problem
