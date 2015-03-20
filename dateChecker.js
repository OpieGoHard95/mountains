load('gods.js');
var gods = JSON.parse(GODS);

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// Attempting find gods created within the last year

print(JSON.stringify(filter(gods, function(name) {
	return name.release > 1357016400000 ;
})));



















