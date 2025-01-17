/**
 * Copyright © 2012 Ramón Lamana
 */
 
(function(global) {

	'use strict';

	var ShapeCommander = function(decorator) {
		global.Commander.apply(this);
	}

	ShapeCommander.prototype = new global.Commander();

	ShapeCommander.prototype.commands = {
		shape: function(n1, n2, n3, n4) {
			var id = 'supertag_' + Math.floor(Math.random()*10e7);
			this.output('<div id="'+id+'" />','WEB');
			
			var image = new Supertags.Image(300, 300, {
				n1: n1 ? n1 : 5,
				n2: n2 ? n2 : 10,
				n3: n3 ? n3 : 15,
				n4: n4 ? n4 : 15
			});
			image.appendTo(document.getElementById(id));
			image.animate();
			
			this.done();
		}
	};

	global.ShapeCommander = ShapeCommander;

})( window );