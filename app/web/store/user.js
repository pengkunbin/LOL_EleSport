import { observable, action, set } from 'mobx'
import Model from './model'

export default class User extends Model {

    @observable
    info = {
        loginAt: 0,
        username: '',
        type: 0
    }

    @observable list = []

    opt = {
        /**
         * get method example
         * @param username
         * @param password
         * @return {{url: string, query: {username: *, password: *}}}
         */
        login: (username, password) => ({
            url: `/api/v1/user/login`,
            query: {
                username,
                password
            }
        }),
        /**
         * post method example
         * @param username
         * @param password
         * @return {{url: string, body: {username: *, password: *}}}
         */
        register: (username, password) => ({
            url: `/api/v1/user/register`,
            body: {
                username,
                password
            }
        }),
        getInfo: () => ({
            url: '/api/v1/user/info'
        }),
    }

    @action
    getInfo() {
        return this._get(this.opt.getInfo(), (data) => {
            set(this.info, data)
        })
    }

    /**
     * @param username
     * @param password
     * @returns {Promise}
     */
    login({ username, password }) {
        return this._get(this.opt.login(username, password))
    }

    /**
     * @param username
     * @param password
     */
    register({ username, password }) {
        return this._post(this.opt.register(username, password))
    }
}

