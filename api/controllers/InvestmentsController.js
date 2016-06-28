/**
 * InvestmentsController
 *
 * @description :: Server-side logic for managing investments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new': function(req, res) {
		res.view();
	},

	create: function(req,res,next) {
		Investments.create( req.params.all(), function investmentsCreated(err, investments){
			if(err) return next(err);

			res.redirect('/investments/show/' + investments.id);
		});
	},
	
	show: function(req,res,next){
		Investments.findOne(req.param('id'), function foundInvestments(err, investments) {
			if(err) return next(err);
			if (!investments) return next();
			res.view({
				investments: investments
			});
		});
	},

	index: function(req,res,next){
		Investments.find(function foundInvestmentss (err, investmentss){
			if(err) return next(err);

			res.view({
				investmentss: investmentss
			});
		});
	},
	edit: function(req,res,next) {
		Investments.findOne(req.param('id'), function foundInvestments(err, investments) {
			if(err) return next(err);
			if (!investments) return next();
			res.view({
				investments: investments
			});
		});
	},
	 update: function(req,res,next) {
		Investments.update(req.param('id'), req.params.all(), function investmentsUpdated(err){
			if(err) {
				return res.redirect('/investments/edit/' + req.param('id'));
			}

			res.redirect('/investments/show/' + req.param('id'));
		});
	},

	destroy: function(req, res, next) {
		Investments.destroy(req.param('id')).exec( function()  {
			res.redirect('/investments/');
			});	
			}
	
};

