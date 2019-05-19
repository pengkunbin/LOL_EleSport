import React from 'react'
import { Row, Col } from 'antd'
import Schedule from '../../component/schedule'
import News from '../../component/news'
import 'antd/dist/antd.css'
import './index.scss'

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home_main">
                <Row>
                    <img src="//img.crawler.qq.com/lolwebvideo/20190507104255/c05a6d87dade37b7cb9e76fd4aa678a2/0" width="100%" height="370" alt="rotate1"></img>
                </Row>
                <Schedule/>
                <News/>
            </div>
        )
    }
}
