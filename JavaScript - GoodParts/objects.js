document.writeln("Welcome to javascript objectville");

/** Simple Object Listeral **/
var object1 = {
		"name": "Pawan",
		"age": "35",
		"city": "Plainsboro"
};

console.log(object1["name"]);
console.log(object1["fname"]);
//console.log(object1["fname"].["throwit"]);

//Better way to access value
console.log(object1.name);


/** Nested Object Literal**/
var nestedObj = {
		"status": "OK",
		"code": 200,
		data: {
			"fname": "Pawanpreet Singh",
			"lname": "Gandhi",
			"age": 35
		},
		"developerinfo" :{
			"developerCode": "14200",
			"framework": "Jquery"
		}
};
console.log(nestedObj.status);
console.log(nestedObj.data.fname);
console.log(nestedObj.data.lname);
console.log(nestedObj.data.age);
console.log(nestedObj.developerinfo.developerCode);
console.log(nestedObj.info);
// display default value if value undefined
console.log(nestedObj.info || "NO INFO FOUND");
if (nestedObj.info === undefined){
	console.log("nestedObj.info is undefined");
}

// Update existing
nestedObj.status= nestedObj.status.toLowerCase();
// Add if doesn't exit
nestedObj.info = "Info is added to object to ".toUpperCase()+"\"nestedObj\"";

console.log(nestedObj.status);
console.log(nestedObj.info);


//javascript object are passed by refernce and never copied
var nestedObj1 = nestedObj;
console.log(nestedObj.info);
nestedObj1.info = nestedObj1.info.toLowerCase();
console.log(nestedObj.info);

//Reflections
console.log(typeof nestedObj.status);
console.log(typeof nestedObj.code);
console.log(typeof nestedObj.data);
console.log(typeof nestedObj.novalue);
//Prototype chain produces below 2
console.log(typeof nestedObj.toString);
console.log(typeof nestedObj.constructor);
// Use hasOwnProperty which return 'true' if object has particular property
console.log(nestedObj.hasOwnProperty('status'));
console.log(nestedObj.hasOwnProperty('data'));
console.log(nestedObj.developerinfo.hasOwnProperty('framework'));
console.log(nestedObj.hasOwnProperty('constructor'));

//Enumerations
var key;
for(key in object1){
	if (typeof object1[key] !== 'function'){
		console.log(key+":"+object1[key]);
	}
}

//Delete/Remove object property and do not touch prototype object
console.log("Before delete :"+nestedObj.info);
delete nestedObj.info;
console.log("After delete :"+nestedObj.info);


// Global Abatement
var MYAPP = {};
MYAPP.number = 10;
MYAPP.request = {
	"query": "Computers"
};
MYAPP.response = {
	"results": 55
};
console.log(MYAPP.number);
console.log(MYAPP.request.query);
console.log(MYAPP.response.results);

