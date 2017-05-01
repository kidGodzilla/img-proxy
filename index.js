#!/usr/bin/env nodejs

var app = require('express')();
var request = require('request');

app.get('/', function(req, res) {
	var url = decodeURI(req.query['url']);
	var width = req.query['w'];
	var height = req.query['h'];

	url = url.replace('https://', '').replace('http://', '');
	var parts = url.split('/');
	var hostname = parts.shift();
	var pathname = '/'+parts.join('/');

	var rszio = 'http://'+hostname+'.rsz.io'+pathname+'?mode=crop';
	if (width) weserv = weserv += '&width='+width;
	if (height) weserv = weserv += '&height='+height;

	var weserv = 'http://images.weserv.nl/?url='+hostname+pathname;
	if (width) weserv = weserv += '&w='+width;
	if (height) weserv = weserv += '&h='+height;

    request(rszio).pipe(res);
    request(weserv).pipe(res);
});

/**
 * Start Server
 */
app.listen(3000, function () {
    console.log('App listening on port 3000!')
});