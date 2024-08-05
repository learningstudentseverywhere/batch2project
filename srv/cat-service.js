const cds = require('@sap/cds');  //Importing the required Libraries
var schoolServiceHandler = require('./Handler/schoolServiceHandler')
var collegeServiceHandler = require('./Handler/collegeServiceHandler')
//If we use module.exports, then only the custom logic will be public for all other files
//Or else it will be a private variable and cannot be used by other files
module.exports = cds.service.impl(
  
  async function(){

    schoolServiceHandler(this,cds)
    collegeServiceHandler(this,cds)

  }


);