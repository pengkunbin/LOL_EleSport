import axios from 'axios'

export default class Axios{
    static get(options){
        let baseApi = 'http://192.168.1.102:8080/Match';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((res)=>{
                if(res.status === 200){
                    resolve(res.data)
                }else{
                    reject(res)
                }
            })
        })
    }
}