import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import 'antd/dist/antd.css'
import './index.scss'


export default class Footer extends React.Component {
    render() {
        return (
            <div className="footerMain">
                <Row className="footerRow">
                    <Col span={4}>
                        <img src="http://ossweb-img.qq.com/images/lol/v3/logo-tencentgame.png" alt="" />
                    </Col>
                    <Col span={2} className="secondImg">
                        <img src="http://ossweb-img.qq.com/images/lol/v3/logo-riot.png" alt="" />
                    </Col>
                    <Col span={9}></Col>
                    <Col span={7}>
                        <p>COPYRIGHT © 1998 - 2019 TENCENT. ALL RIGHTS RESERVED.</p>
                        <p>COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</p>
                        <p>本网络游戏适合18+岁的用户使用；为了您的健康，请合理控制游戏时间。</p>
                    </Col>
                </Row>
            </div>
        )
    }
}