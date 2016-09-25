var express = require('express'),
  router = express.Router(),
  path = require('path'),
  CampaignInfo = require('../models/campaignInfo'),
  Candidate = require('../models/candidate'),
  CampaignSummary = require('../models/campaignSummary');
  

  //Do this so that the app can access this file. 
  module.exports = function(app){
      app.use('/campaigns', router);
  }

router.get('/', function(req, res){
    CampaignInfo.getAll(function(err, data){
        if(err){
            console.log(err);
            res.json({error: "There has been an error"});

        }else{
            res.json(data);
        }

        return;
    });
});

router.get('/info', function(req, res){

});