const UserController = require('../controllers/user.controller')

module.exports = (app) =>{
    app.post('/api/signup', UserController.signupUser)
    app.post('/api/login', UserController.loginUser) 
    app.get('/api/logout', UserController.logoutUser) 
}