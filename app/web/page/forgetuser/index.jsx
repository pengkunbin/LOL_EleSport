import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import Header from 'component/header'
import Footer from 'component/footer'
import 'antd/dist/antd.css'
import './index.scss'
import { NavLink } from 'react-router-dom'
import Axios from '../../axios/index'

class RegisterForm extends React.Component {
    openNotificationWithIcon = (type, title, info) => {
        notification[type]({
            message: title,
            description: info
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
                Axios.post({
                    url: '/api-user/user/do_login',
                    data: values,
                    receiver: 'saoge'
                }).then((res) => {
                    console.log('登录的信息:', res)
                    if (res.code === 0) {
                        this.openNotificationWithIcon('success', '登陆成功', '你已经成功登录')
                        // window.location = '/'
                    } else {
                        this.openNotificationWithIcon('error', '登陆失败', res.msg)
                    }
                }).catch((res) => {
                    console.log('error', res)
                })
            }
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: '请输入用户名' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名/手机号" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }]
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="新密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('repassword', {
                        rules: [{ required: true, message: '请再次输入密码' }]
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    <div className="flex">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            找回密码
                        </Button>
                        
                    </div>
                </Form.Item>
            </Form>)
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(RegisterForm);

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="background">
                <Header menuType="second" />
                <div className="background-image-forget">
                    <div className="login-background"></div>
                    <div className="login">
                        <WrappedNormalLoginForm />
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}