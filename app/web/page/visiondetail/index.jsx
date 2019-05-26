import React from 'react'
import 'antd/dist/antd.css'
import './index.scss'
import { Row, Col, Input, Avatar } from 'antd'

const Search = Input.Search;

export default class NewsDetail extends React.Component {



    render() {
        let msg = [{
            avatar: '',
            nickname: 'jizou',
            comment: 'Hello world'
        }]

        let list = msg.map((item) => {
            return <li
                key={item.nickname}
                className="list-item">
                <div className="list-avatar">
                    
                </div>
                <div>
                    <div>{item.nickname}</div>
                    <div>{item.comment}</div>
                    <div>回复</div>
                </div>

            </li>
        })
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
                <Row className="comment">
                    <Row className="mycomment">
                        <div className="comment-title">
                            <div>
                                <span>网友评论</span>
                                <span>文明上网理性发言，请遵守新闻评论服务协议</span>
                            </div>
                            <span>5条评论</span>
                        </div>
                    </Row>
                    <Row className="comment-submit">
                        <Avatar size="large" icon="user" />
                        <Search
                            placeholder="说两句吧"
                            enterButton="发送"
                            size={64}
                            onSearch={value => console.log(value)}
                            className="personal-comment"
                        />
                    </Row>
                    <Row className="commentlist">
                        <ul>
                            {list}
                        </ul>
                    </Row>
                </Row>
            </div>
        )
    }
}