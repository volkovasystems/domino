function A( ){

}

A.prototype.b = function b( ){

};

var reconstruct = function reconstruct( f, vs ){
	if( typeof f == "function" && typeof vs == "object" ){
		var fs = {};
		var fstring;
		var fn;
		for( var p in f.prototype ){
			if( vs[ p ] ){
				//I was thinking eval can place the function globally.
				//But due to research I think it can't.
				fstring = f.prototype[ p ].toString( );
				//Determine if function has a name else append one.
				if( !( /function\s*[A-Za-z]\w*\s*/ ).test( fstring ) ){
					fstring = "function " + p + fstring.split( "function " )[ 1 ];
				}
				eval( "fn = " + fstring + ";" );
				fs[ p ] = fn;
			}
		}
		//Now we have the fresh functions.
		//Each function can act as a getter and setter
		//vs contains fname:vfunc pairs
		for( var fname in vs ){
			//the shared variable will be the gateway bridging the two functions
			var shared;
			f.prototype[ fname ] = function( ){
				//Correct the slice
				shared = this;
				fs[ fname ].apply( this, Array.prototype.slice.call( arguments, 0 ) );
			};

			f.prototype[ fname ].valueOf = function( ){
				//valueOf is indirect but due to shared variable
				//	the environment is delegated.
				return vs[ fname ].apply( shared, Array.prototype.slice.call( arguments, 0 ) );
			};
		}
	}
};
