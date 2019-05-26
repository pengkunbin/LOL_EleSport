import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
import { NavLink } from 'react-router-dom'


export default class Header extends React.Component {
    componentWillMount() {
        let test = window.location.href;
        let url = test.split(/\:|\//g).pop()
        console.log(url)
        this.state.current = url
    }

    state = {
        current: 'home'
    }
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key
        });
    }
    render() {
        const { menuType } = this.props;
        return (
            <div>

                <Row className="Header">
                    <Col span={2}></Col>
                    <Col span={4}>
                        <NavLink to="/home" className="weblogo fl"></NavLink>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={6} className="header_right">
                        <span className="login1901-avatar-wrap">
                            <img src="https://ossweb-img.qq.com/images/lol/v2/personal/avatar/default.png" width="50" className="fl" />
                        </span>
                        <span className="whiteColor fl">
                            亲爱的召唤师，请<NavLink to="/login" className="span">登录</NavLink>
                        </span>
                    </Col>
                </Row>

                {
                    menuType ? '' :
                        <Row className="Header">
                            <Col span={2}></Col>
                            <Col span={7}>
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                    theme="dark"
                                    className="Menu"
                                >
                                    <Menu.Item key="home">
                                        <NavLink to="/home">首页</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="vision">
                                        <NavLink to="/vision">视频</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="team">
                                        <NavLink to="/team">战队</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="course">
                                        <NavLink to="/course">赛程</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="persondata">
                                        <NavLink to="/persondata">数据</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="ticket">
                                        <NavLink to="/ticket">售票</NavLink>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={7}>
                            </Col>
                            <Col span={8}>
                            </Col>
                        </Row>
                }
            </div>
        )
    }
}
