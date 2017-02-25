function makeGreeting(language) {

  return function(firstname, lastname) {

    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }

  }

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


// Let us try similar example
function factoryOfFunctions(type) {

  return function(deal) {
    if (type == 'sale') {
      return {
        deal: deal,
        type: type
      };
    } else if (type == 'coupons') {
      return {
        deal: deal,
        type: type
      };
    }
  }
}

var saleFunct = factoryOfFunctions('sale');
var couponFunct = factoryOfFunctions('coupons');

console.log(saleFunct("Save 30% at Kohl's"));
console.log(couponFunct("Udemy course - BOXING15"));
