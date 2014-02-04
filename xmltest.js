//var xmlex = "<a b=\"c\"><b c=\"d\"><e f=\"g\">123</e></b></a><c d=\"e\"><h i=\"j\"></h></c><k m=\"n\">123</k>";


/*
"<a b=\"c\"><b c=\"d\"><e f=\"g\">123<!--Why--></e></b></a><c d=\"e\"><h i=\"j\"></h></c><!--Yeah--><k m=\"n\">123</k>".split( /(?=\<[A-Za-z]|\<\/[A-Za-z])/ ).map( function( value ){
	var result = value.split( />\b/ ) 
	if( result.length == 2 ){
		return result[ 0 ] + ">~" + result[ 1 ] + "~"
	}else return value	   
} ).join( "~" ).replace( /~+/g, "~" ).split( "~" )
["<a b="c">", "<b c="d">", "<e f="g">", "123", "</e>", "</b>", "</a>", "<c d="e">", "<h i="j">", "</h>", "</c>", "<k m="n">", "123", "</k>"]
*/

/*var splitDOM = function splitDOM( DOM ){
	var splittedDOM = DOM.split( /(?=\<[A-Za-z]|\<\/[A-Za-z])/ );
	var index = splittedDOM.length;
	var splitRegex = />\b/;
	var element;
	while( index-- ){
		element = splittedDOM[ index ]
		element = element.split( splitRegex );
		if( element.length == 2 ){
			splittedDOM[ index ] = element[ 0 ] + ">~" + element[ 1 ] + "~";
		}
	}
	splittedDOM.join( "~" )
		.replace( /~+/g, "~" )
		.split( "~" );
};*/

//Update: /(?=\<[A-Za-z]|\<\/[A-Za-z]|\b[^<>]+(?=\<))/
// /\<[_A-Za-z][\w\.\-]*\s*(?:[_A-Za-z][\w\.\-]*(?:=\"[^\"]*\")\s*)*\>/
// match quotation marks /\"(?:[^\"]|.)*\"(?=\s?|>)/

//We will currently use nodejs md5 hashing
var crypto = require( "crypto" );

var processDOM = function processDOM( DOM ){
	//Prepare the regexes.
	//All regex should not be created again.
	//So they should be semi-accessible global entities.

	//Regex for namespaces.
	var name = "[_A-Za-z][\w\.\-]*";
	var prefix = name;
	var localPart = name;
	var qualifiedName = prefix + "(?:\:" + localPart + ")?";
	var namespace = qualifiedName;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

	//Aliases to the namespace.
	var elementName;
	var tagName = elementName = namespace;

	//Regex for attribute.
	var attributeName = namespace;
	var attributeValue = "\"[^\"]*\"|'[^']*'";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	var attributeSet = attributeName + "(?:=" + attributeValue + ")?";
	
	/*
		CDATA sections are dangerous to the splitter.
		So to resolve this issue we will replace first all CDATA sections.
		Each section will be hashed. The hash will be the one
			to replace the original contents.
		After the splitter it will be merge again. CDATA sections should
			not be processed.
	*/

	//Grandeur splitter :D
	/*
		This will split the following:
			[*] tags
			[*] comment
			[*] text nodes
			[*] DTDs
			[*] processing instructions
	*/
	var splittedDOM = DOM
		.split( /(?=<?[_A-Za-z]|<!--|<![_A-Za-z]|<[_A-Za-z]|<\/[_A-Za-z]|\b[^<>]+[^<>](?=<))/ );
	//TODO: Add support for CDATA
	
	//Regex for tags
	var beginTag = new RegExp( "<" + tagName + "\s*(?:" + attributeSet + "\s*)*>" );
	var endTag = new RegExp( "</" + tagName + ">" );
	var singleTag = new RegExp( "<" + tagName + "\s*(?:" + attributeSet + "\s*)*/>" );

	var UIDregex = new RegExp( "uid=" + attributeValue );
	var hashRegex = new RegExp( "hash=" + attributeValue );
	var updateTimeRegex = new RegExp( "update-time=" + attributeValue );

	var DOMobject = { };

	var length = splittedDOM.length;
	var index = -1;
	var currentElement = [ ];
	var elementHash;
	var attributeStrings;
	var element;
	var attributeList;
	while( ++index < length ){
		/*
			First, every element in the splitted DOM will be identified.
			We will place higher priority on tags and text nodes.
		*/
		if( beginTag.test( splittedDOM[ index ] ) ){
			element = splittedDOM[ index ];
			/*
				Extract the element name and the attributes.
			*/

			//Create a temporary hash in case the UID is not present in the attributes.
			elementHash = crypto.createHash( "md5" )
				.update( element, "utf8" )
				.digest( "hex" ).toString( );
			//We have to note that the hash can have duplicates if UID is not present.
			//If the UID of the DOM has duplicate then it is not out fault. The coder is dumb.

			if( elementHash in DOMobject ){
				//Do something here to prevent collision.
			}

			//This solution is the only way to isolate the attributes.
			//The value of the attributes may contain < or >.
			
			attributeList = {};
			
			Object.defineProperty( attributeList, "get",
				{
					"enumerable": false,
					"configurable": true,
					"writable": false,
					"value": function get( attributeName ){
						var key = "_" + attributeName;
						if( key in attributeList ){
							return attributeList[ key ];
						}
						return false;
					}
				} );

			Object.defineProperty( attributeList, "list",
				{
					"enumerable": false,
					"configurable": true,
					"writable": false,
					"value": function list( ){
						return Object.getOwnPropertyNames( attributeList )
							.map( function( name ){
								if( ( /^_[^_]/ ).test( name ) ){
									return name.substring( 1 );
								}
							} )
							.toString( )
							.replace( /,+/g, "," )
							.replace( /,$/, "" )
							.split( "," );
					}
				} );

			var UID;
			var hash;
			var updateTime;
			attributeStrings = element.split( new RegExp( "^<" + attributeName + "\s?" ) )[ 1 ]
				.replace( />$/, "" )
				.split( /(?=[_A-Za-z][\w\.\-]*(?:\:[_A-Za-z][\w\.\-]*)?(?=\=))/ )
				.map( function( value, index ){
					value = value.trim( );

					var key;
					//Now extract the attributes with high priority to UID.
					if( UIDregex.test( value ) && !UID ){
						UID = value.split( "uid=" )[ 1 ].replace( /^(?:"|')|(?:"|')$/g, "" );
						/*
							I'm going to define the problem here.
							We want to store the attribute and the attribute's value
								as key value pair inside attributeList object.
							The problem is what if the attribute name is a non configurable
								property of the object?
							So for an immediate best solution we will install
								a get function that will only retrieve the attribute value.
							We will also append a prefix to the attribute and
								set is as non enumerable.
						*/
						Object.defineProperty( attributeList, "_uid",
							{
								"enumerable": false,
								"configurable": true,
								"writable": false,
								"value": UID
							} );
						/*
							Why do we need the UID?
							The uid is a unique reference to the DOM element.
							Together with the hash of the DOM, they represents
								the state of the DOM.

							Take note that the state of the DOM is time based.

							The format for the state of the DOM:

								uid:hash:time

							Where time is the update time of the current hash of the DOM.

							So every DOM element must consist of these 3 respresentational attributes
								the uid, hash and the update time.

							Hash is the md5 hash signature of the whole element including the content.
						*/
					}else if( hashRegex.test( value ) && !hash ){
						hash = value.split( "hash=" )[ 1 ].replace( /^(?:"|')|(?:"|')$/g, "" );
						Object.defineProperty( attributeList, "_hash",
							{
								"enumerable": false,
								"configurable": true,
								"writable": false,
								"value": hash
							} );
					}else if( updateTimeRegex.test( value ) && !updateTime ){
						updateTime = value.split( "update-time=" )[ 1 ].replace( /^(?:"|')|(?:"|')$/g, "" );
						Object.defineProperty( attributeList, "_hash",
							{
								"enumerable": false,
								"configurable": true,
								"writable": false,
								"value": updateTime
							} );
					}else{
						var key = value.match( new RegExp( "^" + attributeName ) )[ 0 ];
						
						value = value.split( new RegExp( "^" + attributeName + "=(?:\"|')" ) )[ 1 ]
							.replace( /(?:"|')$/, "" );

						var type;
						if( ( /:/ ).test( key ) ){
							type = ( key = key.split( ":" ) )[ 1 ];
							key = key[ 0 ];
						}

						key = "_" + key;

						//With the presence of a namespace,
						//	the value should be surrounded to give
						//	importance to the inclusion of the type.
						if( type ){
							var originalValue = value;
							value = {
								"valueOf": function valueOf( ){
									return originalValue;
								},
								"toString": function toString( ){
									return originalValue;
								},
								"type": type
							};
						}

						Object.defineProperty( attributeList, key,
							{
								"enumerable": false,
								"configurable": true,
								"writable": false,
								"value": value
							} );
					}

					if( !UID ){
						//Generate a random UID.
					}

				} );

		}else if( endTag.test( splittedDOM[ index ] ) ){

		}else if( singleTag.test( splittedDOM[ index ] ) ){

		}
	}
};