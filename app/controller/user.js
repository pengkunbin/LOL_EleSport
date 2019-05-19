const { resWrap, decrypt }  = require('../libs/util')
const userRule = {
    username: 'email',
    password: {
        type: 'string',
        min: 6,
        max: 24
    }
}

module.exports = (app) => {
    return class UserController extends app.Controller {
        async register() {
            const ctx = this.ctx
            const body = ctx.request.body
            ctx.validate(userRule, body)
            ctx.body = resWrap(await this.service.user.register(body))
        }

        async login() {
            const ctx = this.ctx
            const body = ctx.request.query
            ctx.validate(userRule, body)
            ctx.body = resWrap(await this.service.user.login(body))
        }

        async info() {
            this.ctx.body = resWrap({
                data: {
                    username: 'foo',
                    loginAt: Date.now(),
                    type: 0
                }
            })
            /*
            // auth & login redirect
            const user = decrypt(this.ctx.session.user, this.config.pwdSeed)

            try {
                this.ctx.body = resWrap({ data: JSON.parse(user) })
                console.log('pass')
            } catch (e) {
                console.log(e)
                this.ctx.session = null
                this.ctx.redirect('/login')
            }
             */
        }
    }
}
