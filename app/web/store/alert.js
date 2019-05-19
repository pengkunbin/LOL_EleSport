import { action, observable } from 'mobx'
import Model from './model'

export default class Alert extends Model {

    @observable type = 'info'
    @observable text = ''
    @observable open = false

    @action
    error(text) {
        this.type = 'error'
        this.text = text
        this.open = true
    }

    @action
    success(text) {
        this.type = 'success'
        this.text =  text
        this.open = true
    }

    onClose() {
        this.open = false
        this.text = ''
    }

}
