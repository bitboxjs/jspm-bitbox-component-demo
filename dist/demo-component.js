(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('bitbox'), require('bitbox/elements')) :
	typeof define === 'function' && define.amd ? define(['bitbox', 'bitbox/elements'], factory) :
	(global.demoBox = factory(global.bitbox,global.bitbox_elements));
}(this, function (bitbox,bitbox_elements) { 'use strict';

	/** hello box */

	function hello(props) {
		var $tree = [];
		$tree.push(bitbox_elements.h1({}, function ($tree) {
			$tree.push('Hello World');
			return $tree;
		}([])));
		return $tree.pop();
	}

	return hello;

}));