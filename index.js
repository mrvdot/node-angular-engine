/**
 * Placeholder for better angular integration to come
 */

 var fs = require('fs');

//todo - Extend this to actually parse (if possible) options and trigger callback function
exports.render = function(path, options, fn) {
	fs.readFile(path, 'utf8', fn);
}