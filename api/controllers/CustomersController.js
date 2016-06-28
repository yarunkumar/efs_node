/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res) {
		res.view();
	},

	create: function(req,res,next) {
		Customers.create( req.params.all(), function customersCreated(err, customers){
			if(err) return next(err);

			res.redirect('/customers/show/' + customers.id);
		});
	},
	
	show: function(req,res,next){
		Customers.findOne(req.param('id'), function foundCustomers(err, customers) {
			if(err) return next(err);
			if (!customers) return next();
			res.view({
				customers: customers
			});
		});
	},

	index: function(req,res,next){
		Customers.find(function foundCustomerss (err, customerss){
			if(err) return next(err);

			res.view({
				customerss: customerss
			});
		});
	},
	edit: function(req,res,next) {
		Customers.findOne(req.param('id'), function foundCustomers(err, customers) {
			if(err) return next(err);
			if (!customers) return next();
			res.view({
				customers: customers
			});
		});
	},
	 update: function(req,res,next) {
		Customers.update(req.param('id'), req.params.all(), function customersUpdated(err){
			if(err) {
				return res.redirect('/customers/edit/' + req.param('id'));
			}

			res.redirect('/customers/show/' + req.param('id'));
		});
	},

	destroy: function(req, res, next) {
		Customers.destroy(req.param('id')).exec( function()  {
			res.redirect('/customers/');
			});	
			}
		
};

