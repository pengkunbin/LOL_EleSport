const { encrypt, decrypt } = require('../libs/util')
const USER_TABLE = 'user'
const DEFAULT_TYPE = 0

module.exports = (app) => {
    return class UserService extends app.Service {
        async register({ username, password }) {
            return { data: { id: 1 } }
            /*
            // user register & db example
            const existRes = await app.mysql.select(USER_TABLE, {
                where: { username }
            })
            if (existRes.length) {
                throw new Error('USERNAME_USED')
            }
            const pwdSeed = this.config.pwdSeed
            const hash = encrypt(password, pwdSeed)
            const res = await app.mysql.insert(USER_TABLE, { username, password: hash, type: DEFAULT_TYPE })
            const sessionData = {
                id: res.insertId,
                loginAt: +new Date(),
                username,
                type: 0
            }
            this.ctx.session = {
                user: encrypt(JSON.stringify(sessionData), pwdSeed)
            }
            return { data: { id: res.insertId } }
            */
        }

        async login({ username, password }) {
            return { data: {} }
            /*
            // user login & db example
            const pwdSeed = this.config.pwdSeed
            const res = await app.mysql.select(USER_TABLE, {
                where: { username }
            })
            if (!res.length) {
                throw new Error('USER_NOT_FOUND')
            }
            const pwd = decrypt(res[0].password, pwdSeed)
            if (pwd !== password) {
                throw new Error('WRONG_PASSWORD')
            }
            const sessionData = {
                id: res[0].id,
                loginAt: +new Date(),
                username: res[0].username,
                type: res[0].type
            }
            this.ctx.session = {
                user: encrypt(JSON.stringify(sessionData), pwdSeed)
            }
            return { data: {} }
            */
        }
    }
}
