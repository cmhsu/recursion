// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  var result = [document.body];
  var searchChildNodes = function(node) {
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i].classList !== undefined) {
        if (childNodes[i].classList.contains(className)) {
          result.push(childNodes[i]);
        }
      }
      searchChildNodes(childNodes[i]);
    }
  };
  searchChildNodes(document.body);
  return result;
};
