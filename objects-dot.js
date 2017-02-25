var person = new Object();

person["firstname"] = "Pawanpreet Singh";
person["lastname"] = "Gandhi";
person["_age"] = 38;

console.log(person["firstname"]);
console.log(person.lastname);
console.log(person._age);

person.address = new Object();
person.address.city = "Robbisnville";
person.address.zip = "08691";

console.log(person);
console.log(person.address.city);
console.log(person.address.zip);
