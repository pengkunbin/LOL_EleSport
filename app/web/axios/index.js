import axios from 'axios'

let mypost = function (options, baseApi) {
    return new Promise((resolve, reject) => {
        axios({
            withCredentials: true,
            url: options.url,
            method: 'post',
            baseURL: baseApi,
            timeout: 5000,
            data: (options.data || options.data.params) || ''
        }).then((res) => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res)
            }
        })
    })
}

let myget = function (options, baseApi) {
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: 'get',
            baseURL: baseApi,
            timeout: 5000,
            params: (options.data && options.data.params) || ''
        }).then((res) => {
            if (res.status === 200) {
                console.log('axios:',res)
                resolve(res.data)
            } else {
                reject(res)
            }
        })
    })
}

export default class Axios {

    static get(options) {

        const baseApi = {
            laosan: 'http://192.168.1.107:8091/',
            saoge: 'http://192.168.1.102:8200/'
        };

        if (options.receiver) {
            switch (options.receiver) {
            case 'saoge':
                return myget(options, baseApi.saoge).then()
            case 'laosan':
                return myget(options, baseApi.laosan).then()
            default:
                return myget(options, baseApi.laosan).then()
            }
        } else {
            return myget(options, baseApi.laosan).then()
        }
    }

    static post(options){
        const baseApi = {
            laosan: 'www.match.com',
            saoge: 'http://192.168.1.102:8200/'
        };

        if (options.receiver) {
            switch (options.receiver) {
            case 'saoge':
                return mypost(options, baseApi.saoge).then()
            case 'laosan':
                return mypost(options, baseApi.laosan).then()
            default:
                return mypost(options, baseApi.laosan).then()
            }
        } else {
            return mypost(options, baseApi.laosan).then()
        }
    }
}