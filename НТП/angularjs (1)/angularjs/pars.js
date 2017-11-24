const request = require('request'); 
var et = require('elementtree'); 

request('http://www.nationalbank.kz/rss/rates_all.xml', function(err, res, body) { 
data = et.parse(body); 

mass = data.findall('./channel/item'); 

console.log(parseFloat(mass[4].getchildren()[2].text)); 
console.log(parseFloat(mass[5].getchildren()[2].text)); 
console.log(parseFloat(mass[14].getchildren()[2].text)); 

});