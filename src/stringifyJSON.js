// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '{';
  if (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result += prop;
        result += ':';
        result += obj[prop];
      }
    }
  } else {
    result += '}'
    return result;
  }

};
