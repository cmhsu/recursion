// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  var answer = [document.body];
  var childNodes = document.body.childNodes;
  childNodes = [].slice.call(childNodes);
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].classList != undefined) {
      if (childNodes[i].classList.contains(className)) {
        answer.push(childNodes[i]);
      }
    }

  }
  return answer;
};
