/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'OutOfTheSandbox\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-menu' : '&#xe000;',
			'icon-cart' : '&#xe001;',
			'icon-user' : '&#xe002;',
			'icon-search' : '&#xe003;',
			'icon-pinterest' : '&#xe004;',
			'icon-vimeo' : '&#xe008;',
			'icon-tumblr' : '&#xe009;',
			'icon-google-plus' : '&#xe00b;',
			'icon-facebook' : '&#xe007;',
			'icon-instagram' : '&#xe006;',
			'icon-twitter' : '&#xe00c;',
			'icon-feed' : '&#xe005;',
			'icon-linkedin' : '&#xe00d;',
			'icon-vimeo-2' : '&#xe00e;',
			'icon-flickr' : '&#xe00f;',
			'icon-phone' : '&#xe00a;',
			'icon-mail' : '&#xe010;',
			'icon-plus' : '&#xe011;',
			'icon-checkmark' : '&#xe012;',
			'icon-youtube' : '&#xe013;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
