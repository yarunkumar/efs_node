/**
 * Stocks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 	id: {
  		type: 'string',
  	},
	customer_id: {
  	type: 'string'
  },
  stsymbol: {
  	type: 'string'
  },
  stname: {
  	type: 'string'
  },
  noshares:  {
  	type: 'string'
  },
  purchaseprice:  {
  	type: 'string'
  },
  datepurchased: {
  	type: 'string'
  },
  createdAt: {
  	type: 'string'
  },
  updatedAt: {
  	type: 'string'
  }
  }
};

