/**
* Budget.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      year: {
          type: 'integer',
          defaultsTo: 2015
      },
      owner: {
          type: 'string',
          defaultsTo: ''
      }
  }
};
