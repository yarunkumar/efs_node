/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res){
		res.view();
	},

	create: function(req,res,next) {
		customers.create( req.params.all(), function customerCreated(err, customer){
			if(err) return next(err);

			res.redirect('/customer/show/' + customer.id);
		});
	},

	show: function(req,res,next){
		customers.findOne(req.param('id'), function foundcustomer(err, customer) {
			if(err) return next(err);
			if (!customer) return next();
			res.view({
				customer: customer
			});
		});
	},

	index: function(req,res,next){
		customer.find(function foundcustomers (err, customers){
			if(err) return next(err);

			res.view({
				customers: customers
			});
		});
	},

	edit: function(req,res,next){
		customer.findOne(req.param('id'), function foundcustomer(err, customer) {
			if(err) return next(err);
			if (!customer) return next();
			res.view({
				customer: customer
			});
		});
	},
    update: function(req,res,next) {
		customer.update(req.param('id'), req.params.all(), function customerUpdated(err){
			if(err){
				return res.redirect('/customer/edit/' + req.param('id'));
			}

			res.redirect('/customer/show/' + req.param('id'));
		});
	},

	destroy: function(req, res, next) {
		customer.destroy(req.param('id')).exec( function()  {
			res.redirect('/customer/');
			});
			}		

	
	
};

