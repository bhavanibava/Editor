var express = require("express");
var router = express.Router();
var task = require('../src/resource/task-operations');
router.get('/', function(req, res, next) {
    console.log('index file running');
	res.writeHead(302, {
	  'Location': '/editor/samples/index.html'
	});
	res.end();
});
router.get('/get',function(req,res,next){
	task.getalltastdetails(req,res);
});
router.post('/',function(req,res){
	console.log("&&&&&&&&&&&&&&&&&&&&")
	task.createtaskdetails(req,res);
})
module.exports = router;