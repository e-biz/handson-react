const letters = ['a', 'c', 'd', 'j'];

var para = document.createElement('P'); // DOM Element : <p></p>
var elem = document.createTextNode('a'); // DOM Element (text): 'a'
para.appendChild(elem); // DOM Element para become : <p>a</p>
document.body.appendChild(para); // We add para to the body : <body><p>a</p></body>
