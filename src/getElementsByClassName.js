// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  var result = [];
  if (document.body.class === 'className') {
    result.push(document.body);
  }
  console.log(result); //return empty array. so the lines above don't work. try to convert dom nodes to some format so i'll be able to push to array.
  var childNodes = document.body.childNodes;
  childNodes = Array.prototype.slice.apply(childNodes);
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].classList != undefined) {
      if (childNodes[i].classList.contains(className)) {
        result.push(childNodes[i]);
      }
    }
  }
  return result;
};
