// http://ryanmorr.com/understanding-scope-and-context-in-javascript/
var person = {
  firstname: "pawan",
  lastname: "preet"
}

var abstractObj = {
  'firstname': 'default',
  'lastname': 'default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

console.log(abstractObj.getFullName());
console.log(abstractObj.getFullName.call(person));
console.log(abstractObj.getFullName.apply(person));
