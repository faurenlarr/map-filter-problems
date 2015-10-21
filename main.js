// console.log("Your code goes in this document.");
//
// _.times(100, function() {
//   console.log("hi");
// });



// var priceOfItems = items.forEach(function(currElement,index,array) {
// console.log(currElement.price);
// });


// #1
var avg ;
var combinedPrice = 0;
var listedItems =
items.map(function(currElement,index,array) {
  return(currElement.price);
});
var priceOfItems = items.forEach(function(currElement,index,array){
    combinedPrice += currElement.price ;
    // console.log(combinedPrice);

});
avg = Math.round(combinedPrice/items.length)

$('#answer1').text(avg);


// #2
var cost = items.filter (function(el){
  return el.price > 14 && el.price <18;
});
var priceAndTitle = cost.map(function(el){
  return el.title + "<br>";
});

$('#answer2').append(priceAndTitle);


// #3



var currencyCode = items.filter(function(el){
  return el.currency_code === "GBP";
});


var titleAndCode = currencyCode.map(function(el){
  return [el.title, el.price]

});

$('#answer3').text(titleAndCode);

// #4

var somethingDifferent = items.filter(function(el){
  // console.log(el.materials);
  // return (condition)
  return _.contains(el.materials,"wood");
})

var finalAnswer = somethingDifferent.map(function(el){
  return [el.title];
})
$('#answer4').text(finalAnswer);

// #5

var eightOrMore = items.filter(function(el){
  if( el.materials.length >= 8) {
    return true;

  }
})
var finalReturn = eightOrMore.map(function(el){
  return el.title + " / Materials: " + el.materials + " / Quantity: " + el.materials.length + "<br>";
})

$('#answer5').html(finalReturn);


// #6
var madeByUs = items.filter(function(el){
  return el.who_made === "i_did";
})

var howMany = madeByUs.length
$('#answer6').text(howMany);
