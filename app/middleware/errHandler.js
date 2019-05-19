const errMap = require('../libs/util').errMap

module.exports = () => {
    return async (ctx, next) => {
        try {
            await next()
        } catch (_err) {
            let err = _err
            ctx.app.config.env === 'local' && console.log(_err)
            if (!_err.status) {
                err = errMap[_err.message] || {}
            }
            ctx.app.emit('error', err, ctx)
            const status = err.status || 500
            ctx.body = { success: false, err: { code: status, msg: err.msg || '' } }
            if (status === 422) {
                const detail = err.errors[0]
                ctx.body.err.msg = `${detail.field} ${detail.message}`
            }
            ctx.status = status
        }
    }
}
