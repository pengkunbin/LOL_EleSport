const crypto = require('crypto')
const IV_LENGTH = 16; // For AES, this is always 16

const getKey = (seed) => {
    return crypto.createHmac('MD5', seed)
        .update('I love Qtum')
        .digest('hex')
}

const errMap = {
    USERNAME_USED: {
        status: 400,
        msg: 'username has been used'
    },
    UPDATE_FAILED: {
        status: 400,
        msg: 'update failed'
    },
    DELETE_FAILED: {
        status: 400,
        msg: 'delete failed'
    },
    WRONG_PASSWORD: {
        status: 400,
        msg: 'wrong password'
    },
    USER_NOT_FOUND: {
        status: 404,
        msg: 'user not found'
    },
    UPLOAD_ERROR: {
        status: 400,
        msg: 'upload failed'
    },
    USER_UPDATE_FAILED: {
        status: 400,
        msg: 'user update failed'
    }
}

const resWrap = ({ data, code, msg, pagination }) => (
    code ? {
        success: false,
        err: {
            msg,
            code
        }
    } : Object.assign({
        success: true,
        data
    }, pagination ? { pagination } : {})
)

const encrypt = (text, key) => {
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(getKey(key)), iv)
    let encrypted = cipher.update(text)

    encrypted = Buffer.concat([encrypted, cipher.final()])

    return iv.toString('hex') + ':' + encrypted.toString('hex')
}

const decrypt = (text, key) => {
    const textParts = text.split(':')
    const iv = new Buffer(textParts.shift(), 'hex')
    const encryptedText = new Buffer(textParts.join(':'), 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(getKey(key)), iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}

module.exports = {
    resWrap,
    errMap,
    encrypt,
    decrypt
}
