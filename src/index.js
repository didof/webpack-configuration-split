const links = require('./links');

function createLinks(l) {
	return l.map(function (el) {
		const a = document.createElement('A');
		a.setAttribute('href', el.url);
		a.innerHTML = el.label;
		a.style.display = 'block';
		return a;
	});
}

function injectInTheBody(arr) {
	const body = document.getElementsByTagName('BODY')[0];
	for (let i = 0; i < arr.length; i++) {
		body.appendChild(arr[i]);
	}
}

const nodeLinks = createLinks(links.default);
injectInTheBody(nodeLinks);