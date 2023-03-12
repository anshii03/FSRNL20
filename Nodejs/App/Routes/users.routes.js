const usersControllers = require('../controllers/users.controller')

module.exports = app => {
    app.post("/api/register", usersControllers.register);
    app.post("/api/login", usersControllers.login);
}