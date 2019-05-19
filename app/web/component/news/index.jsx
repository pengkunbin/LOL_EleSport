import React from 'react'
import { Row, Col, Card, List, Avatar, Button, Skeleton } from 'antd'
import 'antd/dist/antd.css'
import Axios from '../../axios/index'
import './index.scss'
const { Meta } = Card;


export default class News extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        newslist: [],
        gamelist: [],
        highschoollist: []
    }

    componentWillMount() {
        this.requestList();
    }

    openOrderDetail = (item) => {
        window.open(`/#/common/detail/${item.newsId}`, '_blank')
    }


    requestList = () => {
        Axios.get({
            url: '/news/findNewsInfoObject.do',
            data: {
                params: {
                    chanId: '30'
                }
            }
        }).then((res) => {

            let newslist = res.data.map((item) => {
                return {
                    title: item.title,
                    time: item.time = new Date(parseInt(item.editTime)).toLocaleString().replace(/:\d{1,2}$/, ' ').match(/\/(\S*)\s/)[1],
                    newsId: item.newsId
                }
            })
            this.setState({ newslist: newslist });
        })
        Axios.get({
            url: '/news/findNewsInfoObject.do',
            data: {
                params: {
                    chanId: '35'
                }
            }
        }).then((res) => {
            let gamelist = res.data.map((item) => {
                return {
                    title: item.title,
                    time: item.time = new Date(parseInt(item.editTime)).toLocaleString().replace(/:\d{1,2}$/, ' ').match(/\/(\S*)\s/)[1],
                    newsId: item.newsId
                }
            })
            this.setState({ gamelist: gamelist });
        })
        Axios.get({
            url: '/news/findNewsInfoObject.do',
            data: {
                params: {
                    chanId: '36'
                }
            }
        }).then((res) => {
            let highschoollist = res.data.map((item) => {
                return {
                    title: item.title,
                    time: item.time = new Date(parseInt(item.editTime)).toLocaleString().replace(/:\d{1,2}$/, ' ').match(/\/(\S*)\s/)[1],
                    newsId: item.newsId
                }
            })
            this.setState({ highschoollist: highschoollist });
        })
    }


    render() {
        let { newslist, gamelist, highschoollist } = this.state;

        return (
            <Row className="newsRow">
                <Col span={8} className="newsColLeft">
                    <Card
                        title="最新资讯"
                        extra={<a href="#">More</a>}
                        style={{ width: 459 }}
                        className="newsColLeftCard"
                    >
                        <h1>TL携手FW成功晋级！MSI小组赛已确定五席</h1>
                        <div className="space">
                            <span>3胜13负！Clid与宁王交手记录</span>
                            <span>下路分析Teddy与JKL一较高下</span>
                        </div>
                        <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            dataSource={newslist}

                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.title}
                                        onClick={() => this.openOrderDetail(item)}
                                        className="hover"
                                    />
                                    <div>{item.time}</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={16} className="newsColRight">
                    <Row>
                        <Col span={12} className="newsColRight_3">
                            <Card
                                title="国际赛事"
                                extra={<a href="#">More</a>}
                                style={{ width: 459 }}
                                className="newsColLeftCard"
                            >
                                <List
                                    className="demo-loadmore-list"
                                    itemLayout="horizontal"
                                    dataSource={gamelist}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                onClick={() => this.openOrderDetail(item)}
                                                title={item.title}
                                                className="hover"
                                            />
                                            <div>{item.time}</div>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                        <Col span={12} className="newsColRight_2">
                            <div>
                                <img className="hot-pic" width="440" height="168" src="https://shp.qpic.cn/cfwebcap/0/7447fc93273b950b478e879d5c49bfbd/0/" alt="热点">
                                </img>
                            </div>
                            <Row>
                                <Col span={12}>
                                    <Card
                                        hoverable
                                        style={{ width: 212 }}
                                        cover={<img alt="example" src="https://shp.qpic.cn/cfwebcap/0/fdb0f123cb2a5512e09ba118c7160a8f/0/" />}
                                    >
                                        <Meta
                                            title="胜负时刻：MSI夺冠分析，干了这毒奶！"
                                        />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card
                                        hoverable
                                        style={{ width: 212 }}
                                        cover={<img alt="example" src="https://shp.qpic.cn/cfwebcap/0/9fcbc06faa98af603c9433f8db9b39ee/0/" />}
                                    >
                                        <Meta
                                            title="TL.Jensen：希望北美再次成为统治力"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6} className="newsColRight_1">
                            <Card
                                hoverable
                                style={{ width: 220, margin: 0 }}
                                cover={<img alt="example" src="https://shp.qpic.cn/cfwebcap/0/1e72c54368783fe3ee79033a00155a3a/0/" />}
                            >
                                <Meta
                                    title="LOL官方视频"
                                />
                            </Card>
                        </Col>
                        <Col span={6} className="newsColRight_1">
                            <Card
                                hoverable
                                style={{ width: 220 }}
                                cover={<img alt="example" src="https://shp.qpic.cn/cfwebcap/0/c4741ff17a5c0405fa56443b8040b015/0/" />}
                            >
                                <Meta
                                    title="LOL官方视频"
                                />
                            </Card>
                        </Col>

                        <Col span={12} className="newsColRight_4">
                            <Card
                                title="高校城市联赛"
                                extra={<a href="#">More</a>}
                                style={{ width: 459 }}
                                className="newsColLeftCard"
                            >
                                <List
                                    className="demo-loadmore-list"
                                    itemLayout="horizontal"
                                    dataSource={highschoollist}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={item.title}
                                                onClick={() => this.openOrderDetail(item)}
                                                className="hover"
                                            />
                                            <div>{item.time}</div>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}