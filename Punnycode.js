const punycode = require('punycode');
console.log(punycode.encode('例')); //qei
console.log(punycode.decode('qei'));
