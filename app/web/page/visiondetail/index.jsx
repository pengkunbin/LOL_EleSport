import React from 'react'
import Comment from '../../component/comment'
import 'antd/dist/antd.css'
import './index.scss'
import { Row, Col, Input, Avatar } from 'antd'

const Search = Input.Search;

export default class NewsDetail extends React.Component {
    
    render() {
        return (
            <div>
                <Row className="vision">
                    <Col span={18}>
                        <video src="http://192.168.1.107/2019/05/23/juren.mp4" controls="controls" height="500" wight="850" type="video/mp4">
                            您的浏览器不支持 video 。
                        </video>
                    </Col>
                    <Col span={6}>
                        <div className="chat">
                            webscoket
                        </div>
                        <Search
                            placeholder="来和小伙伴们互动吧"
                            enterButton="发送"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </Col>
                </Row>
                <Comment/>
            </div>
        )
    }
}