import request from 'superagent'

const noop = () => {}

export default class {
    _get({ url, query }, fn = noop) {
        return new Promise((resolve, reject) => {
            request.get(url).query(query)
                .end((err, res) => {
                    if (res.body && res.body.success) {
                        resolve(res.body.data, res.body.pagination)
                        fn(res.body.data, res.body.pagination)
                    } else if (res.body && res.body.err) {
                        reject(res.body.err)
                    } else {
                        console.log(err)
                        reject(err)
                    }
                })
        })
    }
    _post({ url, body, header = {} }, fn = noop) {
        return new Promise((resolve, reject) => {
            request.post(url).set(header).send(body)
                .end((err, res) => {
                    if (res.body && res.body.success) {
                        resolve(res.body.data, res.body.pagination)
                        fn(res.body.data, res.body.pagination)
                    } else if (res.body && res.body.err) {
                        reject(res.body.err)
                    } else {
                        console.log(err)
                        reject(err)
                    }
                })
        })
    }

    _file({ url, file }, fn = noop) {
        const fd = new FormData()
        fd.append('file', file)
        return new Promise((resolve, reject) => {
            request.post(url)
                .send(fd)
                .end((err, res) => {
                    console.log(err, res)
                    if (res.body && res.body.success) {
                        resolve(res.body.data, res.body.pagination)
                        fn(res.body.data, res.body.pagination)
                    } else if (res.body && res.body.err) {
                        reject(res.body.err)
                    } else {
                        console.log(err)
                        reject(err)
                    }
                })
        })
    }
}
