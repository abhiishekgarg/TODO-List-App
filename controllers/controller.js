module.exports.home = function(req, res)
{
    return res.render('index', 
    {
        title: 'TODO List App'
    });
}