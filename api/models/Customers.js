/**
 * Customers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
autoUpdatedAt: false,
  attributes: {
  	name: {
  		type: 'string',
  	},
	id: {
  	type: 'string'
  },
  streetaddress: {
  	type: 'string'
  },
  city:  {
  	type: 'string'
  },
  state:  {
  	type: 'string'
  },
  zip: {
  	type: 'string'
  },
  primaryemail: {
  	type: 'string'
  },
  homephone: {
  	type: 'string'
  },
  cellphone: {
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

