import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import Header from 'component/header'
import 'antd/dist/antd.css'
import './index.scss'
import {NavLink} from 'react-router-dom'

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="background">
                <div className="background-image">
                    <Header menuType="second" />
                    <div className="login-background"></div>
                    <div className="login">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请再次输入密码' }]
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <div className="flex">
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        注册
                                    </Button>
                                    <span> 已有账户?<NavLink to="/login" className="a">登录</NavLink></span>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;