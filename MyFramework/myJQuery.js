(function(name) {
    
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // IIFE





(function (global, factory){
	console.log("iife function "+this);
	factory(global);

}(typeof window != "undefined" ? window : this, function (windows, noGlobal) {
	console.log("nested iife function "+this);
	
	var class2type = {};

	myJQuery = function (selector) {
		return myJQuery.fn.init(selector);
	}
	function isArraylike( obj ) {
		var length = obj.length,
			type = myJQuery.fn.type( obj );

		if ( type === "function" || myJQuery.fn.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}	
	myJQuery.fn = myJQuery.prototype = {
		version: "1.0.0",
		selector: "",
		init: function (argument) {
			for (var i = 0; i< argument.length ; i++) {
				console.log(argument[i]);
			};
		},
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					myJQuery.fn.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},		
		isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
		},
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		}	
	};
	// myJQuery.extend = myJQuery.fn.extend = function() {
	// }
	// myJQuery.extend({
	// 	makeArray: function( arr, results ) {
	// 		var ret = results || [];

	// 		if ( arr != null ) {
	// 			if ( isArraylike( Object(arr) ) ) {
	// 				jQuery.merge( ret,
	// 					typeof arr === "string" ?
	// 					[ arr ] : arr
	// 				);
	// 			} else {
	// 				push.call( ret, arr );
	// 			}
	// 		}

	// 		return ret;
	// 	}
	// });
	init = myJQuery.fn.init = function (selector) {
		console.log("myJQuery.fn.init has been invoked..");
		for (var i = 0; i< selector.length ; i++) {
			console.log(selector[i]);
		}
		return myJQuery.fn.makeArray(selector, this);
	}
}));


if (myJQuery === undefined){
	console.log('myJQuery is undefined');
}else{
	console.log(myJQuery);
	console.log(myJQuery("div p"));
}





















