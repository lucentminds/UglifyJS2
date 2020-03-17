/** List jshint ignore directives here. **/
/* jslint browser: true */
/* jshint undef: true, unused: true */

/**
 * Borrowed from google analytics.
 *
 * To customize the uglify2 args with an isogram, do this to scope.js
 * string = "ideographs"
 * base54.sort = function(){};
 */
//ideographs
(function(doc, cTagname, cAppHost, cDom, oTag, oTag1, aUrl){
aUrl = [

	// Website's domain.
	'd='+cDom
];

// Create a new script tag.
oTag = doc.createElement( cTagname );

// Locate this tag.
oTag1 = doc.getElementsByTagName( cTagname )[0];// jshint ignore:line

// Set the new script tag to load asynchronously.
oTag.async = 1;

// Set the new script's location to load it.
oTag.src = cAppHost.concat( '?', aUrl.join( '&' ) );

// Insert the new script before this one.
oTag1.parentNode.insertBefore( oTag, oTag1 );

}(document, 'script', 'https://app.foobarbaz.com', location.host ));
