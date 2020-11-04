const List = require('../models/list');

module.exports.home = function(req, res)
{
    List.find({}, function(err, list)
    {
        if(err)
        {
            console.log("Error in fetching list from DB.");
            return;
        }
        return res.render('index', 
        {
            title: "TODO App",
            task_list: list
        });
    });
}

// get task data
module.exports.addTask = function(req, res)
{
    List.create(req.body, function(err, task)
    {
        if(err)
        {
            console.log(`Error in adding task ${err}`); 
            return;
        } 

        return res.redirect('back');
    })
}

module.exports.deleteTask = function(req, res)
{
    var tasks = req.body.task_ids;
    if(typeof(tasks) == 'string')
    {
        List.findByIdAndRemove(tasks, function(err)
        {
            console.log('Deleted a task');
        });
    }
    else
    {
        for(taskid of tasks)
        {
            List.findByIdAndRemove(taskid, function(err){});
        }
        console.log(`Deleted ${tasks.length} tasks`);
    }
    return res.redirect('back');
}