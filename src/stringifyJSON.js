// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result;
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null || typeof obj === 'boolean' || typeof obj === 'number') {
    return obj + '';
  }
  if (Array.isArray(obj)) {
    result = '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        result += ',';
      }
    }
    return result += ']';
  }
  if (typeof obj === 'object') {
    result = '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var currentKey = keys[i];
      if (currentKey === 'functions' || currentKey === 'undefined') {
        continue;
      }
      result += '"' + currentKey + '"' + ':' + stringifyJSON(obj[currentKey]);
      if (i !== keys.length - 1) {
        result += ',';
      }
    }
    return result += '}';
  }
};
