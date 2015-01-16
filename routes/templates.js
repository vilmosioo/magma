'use strict';

var express= require('express'),
	path = require('path'),
	Pr = require('bluebird'),
	router = express.Router();

// parse all html files from their handlebar templates
router.get('/views/:path?/:filename.html', function(req, res){

	var template = path.join(req.params.path || '', req.params.filename),
		view;

	try{
		view = require(path.join('../models/', template));
	} catch(e){
		console.log(e);
		view = function(){
			return Pr.resolve();
		};
	}

	view({
		q: req.query.q
	}).then(function(view){
			res.render(template, {
				layout: false,
				view: view
			});
		});

});

module.exports = router;