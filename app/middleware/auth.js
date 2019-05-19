const { decrypt } = require('../libs/util')
const config = require('../../config/config.priv')

// TODO: user type check

module.exports = () => {
    return async (ctx, next) => {
        await next()
        const skipExt = ['/api/v1/list', '/api/v1/carousel/list', '/login', '/register', '/logout']
        const apiPathReg = /(\/api\/v1\/)/
        const isSkip = skipExt.some((path) => ctx.path.indexOf(path) !== -1)
        if (!isSkip) {
            const status = 403
            if (ctx.session.user) {
                let user = decrypt(ctx.session.user, config.pwdSeed)
                if (user) {
                    try {
                        user = JSON.parse(user)
                        console.log(user.type)
                        if (+user.type < 1) {
                            if (['/create', '/update', '/remove', '/file'].some((path) => ctx.path.indexOf(path) !== -1) && apiPathReg.test(ctx.path)) {
                                console.log('403');
                                ctx.body = { success: false, err: { code: 403, msg: 'need update user group' } }
                                ctx.status = 403
                            }
                        }
                        return
                    } catch (e) {
                        console.log(e)
                        ctx.session = null
                        ctx.redirect('/login')
                    }
                }
            }
            /*
            // auth bypass
            if (apiPathReg.test(ctx.path)) {
                ctx.body = { success: false, err: { code: status, msg: 'login required' } }
                ctx.status = status
            } else {
                ctx.redirect('/login')
            }
            */
        }
    }
}
