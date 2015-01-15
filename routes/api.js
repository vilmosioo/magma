'use strict';

var express= require('express'),
	books = require('../models/books'),
	router = express.Router();

router.use(function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Cache-Control', 'max-age='+(6*24*3600)+', public');
	next();
});
router.get('/search', function(req, res){
	books.search(req.query.q).then(function(books){
		res.status(200).send(books);
	}, function(err){
		res.send(400).send(err);
	});
});
router.use(function(req, res){
	res.sendStatus(404);
});

module.exports = router;