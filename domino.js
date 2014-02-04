var domino = function domino( query ){
	/*
		Domino query specifications

		When the domino is instantiated with a DOM parameter
			it will create a DOM object. This is the general rule.

		All DOM objects not created using domino cannot be queried.
		Well, there's an interesting reason about this.

		All CSS selector queries will be transformed into functions.

		Additional query functions should be included.

		Domino will observe strict XML.

		A single domino instance contains all the child of this DOM element
			it holds.

		Basically, a DOM element is a separate entity from a domino instance
		The domino instance is only used as an engine shell to facilitate
			extensive operation on the DOM element.

		Domino is a DOM engine and its main focus is only on facilitating the DOM map.

		When the coder refers to the domino function instance, the coder is referring
			to the domino shell of the document object thus the coder gets everything
			belonging to the domino.

		Query
			IDs of every element will be manipulated by .id( ) function
			Class is a reserved word so we will use category which will retrieve all classes of an element
				in a beautiful way.
			Names will be manipulated by .name( ) function
			Type will be manipulated by .type( ) function
			The rest of the attributes will be manipulated using the .attribute( ) function
	
		All elements will be stored in a single non leaking global array object constant.
		Each entry has a format of the following:
		element#id:uid.class|class;attr:value|attr:value

		/([A-Za-z]+)(?:#([\w-]+))(?::([\w-]+))?(?:\.([\w-]+(?:\|[\w-]+)+))?(?:;([\w-]+:[\w\W]+(?:\|[\w-]+:[\w\W]+)+))?(?=,)/

		Every time a new element is added here
	*/

	//Domino can be used MAINLY for two purpose, querying and creating new DOM element
	//Therefore the first condition should be checking if the developer is instantiating or not

	//Domino preconfiguration, this will override the domino construct depending on the environment
	if( typeof document == "object" 
		|| document instanceof HTMLDocument )
	{
		//We are on a browser or browser simulated environment
		domino.document = document;

		//Then override the document so that it contains the domino
		document.domino = domino;
	}else{
		//We are on a server.
		/*
			If domino is on the server it can only generate DOM elements but it cannot use the document object
			The good part about this is that domino simulates the document object.

			The hard part is how.

			Apparently if domino is on the server, it can only generate valid XML data

			Event attached to it cannot be distributed back to the client.
		*/
	}

	if( this instanceof domino ){

		return;
	}

	//The rest is for query purposes
};

domino.prototype.valueOf = function valueOf( ){
	//So when the instance is called it will return the DOM object instead of
	//	the domino object.
};

domino.prototype.dom = function dom( ){

};

domino.prototype.id = function id( ){

};

domino.prototype.category = function category( value ){

};

domino.prototype.type = function type( value ){

};

domino.prototype.name = function name( value ){

};

domino.prototype.attribute = function attribute( meta, value ){

};

domino.prototype.node = function node( ){

};