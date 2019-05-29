import React from 'react'
import 'antd/dist/antd.css'
import './index.scss'
import { Row, Col, Input, Avatar } from 'antd'

const Search = Input.Search;

export default class NewsDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    commentReply() {
        this.setState({
            show: !this.state.show
        })
        console.log('commentReply')
    }

    render() {
        let msg = [{
            id: 0,
            avatar: '',
            nickname: 'jizou',
            time: '一个月前',
            comment: 'Hello world',
            childlist: [{
                id: 0,
                nickname_A: 'gay奇',
                nickname_B: '',
                time: '一个月前',
                comment: 'Hello world nmd'
            }]
        }]

        let childlist = msg[0].childlist.map((item) => {
            return <li
                key={item.id}
                className="childlist-item"
            >
                <div className="childlist-info">
                    <div className="childlist-title">
                        <div className="childlist-nickname">
                            <span>
                                {item.nickname_A}
                            </span>
                            {
                                item.nickname_B ?
                                    <span>
                                        回复{item.nickname_B}
                                    </span> : null
                            }
                        </div>
                        <div className="childlist-time">
                            <span>
                                {item.time}
                            </span>
                        </div>
                    </div>


                </div>

            </li>
        })


        let list = msg.map((item) => {
            return <li
                key={item.id}
                className="list-item">
                <div className="list-avatar">
                    <Avatar src={item.avatar ? item.avatar : ''} icon="user" size={50} />
                </div>
                <div className="list-info">
                    <div className="list-nickname">
                        <span>
                            {item.nickname}
                        </span>
                        <span>
                            {item.time}
                        </span>
                    </div>
                    <div className="list-comment">{item.comment}</div>
                    <p className="reply" onClick={() => this.commentReply()}>{this.state.show ? '回复' : '收起'}</p>
                    {
                        this.state.show
                            ?
                            <Search
                                className="reply-comment"
                                placeholder=""
                                enterButton="回复"
                                size="default"
                                onSearch={value => console.log(value)}
                            /> : null
                    }
                    {
                        item.childlist
                            ?
                            <div className="childlist-comment">
                                {list}
                            </div> : null
                    }
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
                            size="large"
                            onSearch={value => console.log(value)}
                            className="personal-comment"
                        />
                    </Row>
                    <Row className="comment-list">
                        <ul>
                            {list}
                        </ul>
                    </Row>
                </Row>
            </div>
        )
    }
}