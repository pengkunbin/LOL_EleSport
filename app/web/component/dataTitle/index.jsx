import React from 'react'
import { Row, Col, Menu, Icon, Table } from 'antd'
import './index.scss'

class Team extends React.Component {
    render() {
        return (
            <Row className="innerTable">
                <Col span={8} className="section">
                    <div className="icon">
                        <img src="//img.crawler.qq.com/lolwebvideo/20190424151401/5985071337c7c4a785fbbdd3b8a75ae8/0" alt="" />
                        <h2>胜率最高</h2>
                    </div>
                    <div className="info">
                        <h3>战队:IG</h3>
                        <p>胜率:73%</p>
                    </div>
                </Col>
                <Col span={8} className="section">
                    <div className="icon">
                        <img src="//img.crawler.qq.com/lolwebvideo/20190424151401/5985071337c7c4a785fbbdd3b8a75ae8/0" alt="" />
                        <h2>击杀最高</h2>
                    </div>
                    <div className="info">
                        <h3>战队:IG</h3>
                        <p>场均击杀:17.4</p>
                    </div>
                </Col>
                <Col span={8} className="section">
                    <div className="icon">
                        <img src="http://img.crawler.qq.com/lolwebvideo/201712250188/27cb76381cb71b7f2888f91193b2ab65/0" alt="" />
                        <h2>场均大龙</h2>
                    </div>
                    <div className="info">
                        <h3>战队:FPX</h3>
                        <p>场均大龙:0.9</p>
                    </div>
                </Col>
            </Row>
        )
    }
}

class Person extends React.Component {
    render() {
        return (
            <Row className="innerTable">
                <Col span={8} className="section">
                    <div className="icon">
                        <img src="//img.crawler.qq.com/lolwebvideo/20190104163734/1eb9dfe899d579003b32879e31760180/0" alt="" />
                        <h2>击杀 最多</h2>
                    </div>
                    <div className="info">
                        <h3>FPXLwx</h3>
                        <p>总击杀：197</p>
                    </div>
                </Col>
                <Col span={8} className="section">
                    <div className="icon">
                        <img src="//img.crawler.qq.com/lolwebvideo/20190424083704/063867e0a5d332bf77b60f2419202fd3/0" alt="" />
                        <h2>助攻 最多</h2>
                    </div>
                    <div className="info">
                        <h3>IGBaolan</h3>
                        <p>总助攻：451</p>
                    </div>
                </Col>
                <Col span={8} className="section">
                    <div className="icon">
                        <img src="//img.crawler.qq.com/lolwebvideo/20190104162447/2ac1f68d1d46695f91c2577c0034c56f/0" alt="" />
                        <h2>KDA最高</h2>
                    </div>
                    <div className="info">
                        <h3>BLGKuro</h3>
                        <p>KDA：6</p>
                    </div>
                </Col>
            </Row>
        )
    }
}

class Hero extends React.Component {
    render() {
        return (
            <Row className="innerTable">
                <Col span={8} className="section">
                    <div className="icon">
                        <div className="outimg">
                            <img src="//ossweb-img.qq.com/images/lol/img/champion/Galio.png" alt="" />
                        </div>
                        <h2>PICK 最多</h2>
                    </div>
                    <div className="info">
                        <h3>正义巨像</h3>
                        <p>PICK 比率：48％</p>
                    </div>
                </Col>
                <Col span={8} className="section">
                    <div className="icon">
                        <div className="outimg">
                            <img src="//ossweb-img.qq.com/images/lol/img/champion/Zoe.png" alt="" />
                        </div>
                        <h2>BAN 最多</h2>
                    </div>
                    <div className="info">
                        <h3>暮光星灵</h3>
                        <p>BAN 比率：46%</p>
                    </div>
                </Col>
                <Col span={8} className="section">
                    <div className="icon">
                        <div className="outimg">
                            <img src="//ossweb-img.qq.com/images/lol/img/champion/Kaisa.png" alt="" />
                        </div>
                        <h2>击杀 最多</h2>
                    </div>
                    <div className="info">
                        <h3>虚空之女</h3>
                        <p>总击杀：631</p>
                    </div>
                </Col>
            </Row>
        )
    }
}

class TeamTable extends React.Component {
    state = {
        index: 0
    }
    getInitailState = function () {
        return {
            index: 0
        }
    }
    handleClick = function (i) {
        this.setState({
            index: i
        });
        console.log(this.state.index)
    }
    render() {
        let msg = [
            {
                'icon': 'victory',
                'name': '胜率',
                'index': 0
            },
            {
                'icon': 'kill',
                'name': '击杀',
                'index': 1
            },
            {
                'icon': 'dead',
                'name': '死亡',
                'index': 2
            }, {
                'icon': 'eyes',
                'name': '插眼',
                'index': 3
            },
            {
                'icon': 'diseyes',
                'name': '排眼',
                'index': 4
            },
            {
                'icon': 'money',
                'name': '金钱',
                'index': 5
            }, {
                'icon': 'smalldragon',
                'name': '小龙',
                'index': 6
            },
            {
                'icon': 'bigdragon',
                'name': '大龙',
                'index': 7
            }
        ]
        let list = msg.map((item) => {
            return <li
                key={item.index}
                onClick={() => { this.handleClick(item.index) }}
                className={this.state.index == item.index ? 'active' : ''} >
                <div className={item.icon}></div>
                <p>{item.name}</p>
            </li>
        })
        return (
            <div className="table-background">
                <h3 className="table-title">战队排行榜</h3>
                <ul className="card">
                    {list}
                </ul>
                <DataTable />
            </div>

        )
    }
}

class DataTable extends React.Component {
    render() {
        const dataSource = [{
            rank: '1',
            team: 'IG',
            appear: 41,
            result: '30/11',
            rate: '73%',
            kill: '17.4',
            dead: '14.2',
            eye: '101',
            diseye: '43',
            money: '59072',
            smalldragon: '1.9',
            bigdragon: '0.9'
        }]

        const columns = [{
            title: '排名',
            dataIndex: 'rank',
            key: 'rank'
        }, {
            title: '战队',
            dataIndex: 'team',
            key: 'team'
        }, {
            title: '出场次数',
            dataIndex: 'appear',
            key: 'appear'
        }, {
            title: '胜/负',
            dataIndex: 'result',
            key: 'result'
        }, {
            title: '胜率',
            dataIndex: 'rate',
            key: 'rate'
        }, {
            title: '总击杀(场均)',
            dataIndex: 'kill',
            key: 'kill'
        }, {
            title: '总死亡(场均)',
            dataIndex: 'dead',
            key: 'dead'
        }, {
            title: '场均插眼',
            dataIndex: 'eye',
            key: 'eye'
        }, {
            title: '场均排眼',
            dataIndex: 'diseye',
            key: 'diseye'
        }, {
            title: '场均金钱',
            dataIndex: 'money',
            key: 'money'
        }, {
            title: '场均小龙',
            dataIndex: 'smalldragon',
            key: 'smalldragon'
        }, {
            title: '场均大龙',
            dataIndex: 'bigdragon',
            key: 'bigdragon'
        }]
        return (
            <Table dataSource={dataSource} columns={columns} />
        )
    }
}


export default class Title extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        if (this.props.current === 'team') {
            return (
                <div>
                    <Team />
                    <TeamTable />

                </div>
            )
        } else if (this.props.current === 'person') {
            return (
                <div>
                    <Person />
                    <TeamTable />
                </div>
            )
        } else {
            return (
                <div>
                    <Hero />
                    <TeamTable />
                </div>
            )
        }
    }
}