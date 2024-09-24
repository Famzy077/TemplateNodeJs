const checkNoAuth = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return res.redirect('/user/login');
    }
    next();
}
const checkAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}

module.exports = { checkNoAuth, checkAuth }