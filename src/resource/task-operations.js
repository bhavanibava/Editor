var Task = require('../../model/index');
var getalltastdetails = function(req,res){
    return Task.find(function(error,tasks){
        if(!error){
            res.send(tasks);
            console.log('get task details successfully, data: '+tasks);
        }
        else{
            res.send({
                statusCode : 500,
                error : "internal server error"
            });
        }
    }) 
}
var createtaskdetails = function(req,res){
    var task = new Task({ 
        title : req.body.title,
        description : req.body.description,
        status : req.body.status,
        content : req.body.content
    })
    console.log("data from body : ",task);
    return task.save(function(error){
        if(!error){
            console.log('Task created successfully');
            res.json({
                statusCode : 200,
                Task : task
            });
        }
        else{
            res.send({
                statusCode : 500,
                error : 'internal error'
            });
        }
    })
}
exports.createtaskdetails = createtaskdetails;
exports.getalltastdetails = getalltastdetails;