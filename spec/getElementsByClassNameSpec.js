var htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];

describe('getElementsByClassName', function(){

  it('should match the results of calling the built-in function', function(){
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var expectedNodeList = document.getElementsByClassName('targetClassName'); //made lines 19 and 20 appear before line 22;
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
console.log(expectedArray);
      var result = getElementsByClassName('targetClassName');
console.log(result)
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
console.log(equality);
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
