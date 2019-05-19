const path = require('path')
const fs = require('fs')
const ip = require('ip')

module.exports = app => {
    const exports = {}

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    }

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    }

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    }

    exports.middleware = [
        'auth',
        'access',
        'errHandler'
    ]

    exports.cssModule = true

    exports.mysql = {
        // 单数据库信息配置
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '123456',
            database: 'myblog'
        }
    }

    exports.keys = 'Qtum'

    exports.session = {
        key: 'QTUM_SESS',
        maxAge: 24 * 3600 * 1000 * 30,
        httpOnly: true,
        encrypt: true,
        renew: true
    }

    exports.multipart = {
        whitelist: [
            '.png',
            '.gif',
            '.jpg', '.jpeg'
        ]
    }

    exports.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }

    const localIP = ip.address()
    const domainWhiteList = [];

    [9000, 9001, 9002].forEach(port => {
        domainWhiteList.push(`http://localhost:${port}`)
        domainWhiteList.push(`http://127.0.0.1:${port}`)
        domainWhiteList.push(`http://${localIP}:${port}`)
    })

    exports.security = {
        domainWhiteList,
        csrf: { enable: false }
    }

    Object.assign(exports)

    return exports
}
