import React from 'react'
import 'antd/dist/antd.css'
import './index.scss'
import { Row, Avatar, Input } from 'antd'

const { Search } = Input

export default class CommentList extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        show: false,
        flag: 0
    }

    commentReply(item) {
        this.setState({
            show: !this.state.show,
            flag: item.id
        })
        console.log('flag', this.state.flag, item)
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
        }, {
            id: 1,
            avatar: '',
            nickname: 'jizou',
            time: '一个月前',
            comment: 'Hello world',
            childlist: [{
                id: 0,
                nickname_A: '三仔',
                nickname_B: '五哥',
                time: '一个月前',
                comment: 'Hello world nmd dsafef'
            }]
        }]

        const childlist = (list) => {
            console.log('list:', list)
            return list.map((item) =>
                <div
                    key={item.id}
                    className="childlist-item"
                >
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
                            :
                        </div>
                        <div className="childlist-time">
                            <span>
                                {item.time}
                            </span>
                        </div>
                    </div>
                    <div className="childlist-info">
                        {item.comment}
                    </div>
                </div>
            )
        }

        const list = msg.map((item) => {
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
                    <p className="reply" onClick={() => this.commentReply(item)}>{this.state.show && this.state.flag === item.id ? '收起' : '回复'}</p>
                    {
                        this.state.show && this.state.flag === item.id
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
                        item.childlist ? childlist(item.childlist) : null
                    }
                </div>

            </li>
        })


        return (<Row className="comment">
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
        </Row>)
    }
}