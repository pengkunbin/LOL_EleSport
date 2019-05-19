module.exports = app => {
    app.get('/api/v1/user/info', app.controller.user.info)
    app.post('/api/v1/user/login', app.controller.user.login)
    app.post('/api/v1/user/register', app.controller.user.register)

    app.get('/(.+)?', app.controller.spa.client)
};
