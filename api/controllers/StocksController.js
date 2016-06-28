/**
 * StocksController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res) {
		res.view();
	},

	create: function(req,res,next) {
		Stocks.create( req.params.all(), function stocksCreated(err, stocks){
			if(err) return next(err);

			res.redirect('/stocks/show/' + stocks.id);
		});
	},
	
	show: function(req,res,next){
		Stocks.findOne(req.param('id'), function foundStocks(err, stocks) {
			if(err) return next(err);
			if (!stocks) return next();
			res.view({
				stocks: stocks
			});
		});
	},

	index: function(req,res,next){
		Stocks.find(function foundStockss (err, stockss){
			if(err) return next(err);

			res.view({
				stockss: stockss
			});
		});
	},
	edit: function(req,res,next) {
		Stocks.findOne(req.param('id'), function foundStocks(err, stocks) {
			if(err) return next(err);
			if (!stocks) return next();
			res.view({
				stocks: stocks
			});
		});
	},
	 update: function(req,res,next) {
		Stocks.update(req.param('id'), req.params.all(), function stocksUpdated(err){
			if(err) {
				return res.redirect('/stocks/edit/' + req.param('id'));
			}

			res.redirect('/stocks/show/' + req.param('id'));
		});
	},

	destroy: function(req, res, next) {
		Stocks.destroy(req.param('id')).exec( function()  {
			res.redirect('/stocks/');
			});	
			}
};

