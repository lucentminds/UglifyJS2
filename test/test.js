/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */

var uglifyJs = require( '../' );


var uglifyOneFile = function( cPath, oOptions ) {
   return new Promise(function( resolve ){

      var oResult = uglifyJs.minify( cPath, oOptions );
      resolve({ 
            path: cPath,
            outcome: oResult 
      });
   });

};// /uglifyOneFile()

return uglifyOneFile( './test/sample.js', {
   keep_fargs: true,
   mangle: {
      quote_style: 1,
      isogram: 'f o ob a r ba z'.split( ' ' )
   }
} )
.then(function( oResult ){
   console.log( oResult );
});