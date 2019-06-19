var userDAO = require('./dao/UserDAO');
// var taskDAO = require('./dao/TaskDAO');
module.exports = function(app){
    app.post('/api/login', (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        console.log('Username:' , username, "password:", password);
        
        userDAO.login( username,password, function(err,rows){
            if(err) res.json(err);
            res.json(rows[0]);
        });        
    });

    app.post('/api/login', (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        console.log('Username:' , username, "password:", password);
        
        userDAO.login( username,password, function(err,rows){
            if(err) res.json(err);
            res.json(rows[0]);
        });        
    });
    
    app.get('/api/accounts', (req, res) => {
        userDAO.list(function(err,rows){
            if(err) res.json(err);
            res.json(rows);
        });        
    });

    
    // app.get('/api/tasks',(req,res) => {
    //     taskDAO.list(function(err,rows){
    //         if(err) res.json(err);
    //         res.json(rows);
    //     });
    // });
    
    // app.get('/api/mytasks',(req,res) => {
    //     var userId = req.query.userId;
    //     console.log("UserId:", userId);
    //     taskDAO.listMyTasks(userId,function(err,rows){
    //         if(err) res.json(err);
    //         res.json(rows);
    //     });
    // });
    
    // app.get('/api/users/:userId/tasks',(req,res) => {
    //     var userId = req.params.userId;
    //     console.log("UserId:", userId);
    //     taskDAO.listMyTasks(userId,function(err,rows){
    //         if(err) res.json(err);
    //         res.json(rows);
    //     });
    // });
}