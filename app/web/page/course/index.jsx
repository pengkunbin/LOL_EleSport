import React from 'react'
import { Row, Col, Table, Divider, Tag } from 'antd'
import './index.scss'

const columns = [{
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    render: tags => (
        <span>
            {tags.map(tag => {
                let color = tag === '已结束' ? 'volcano' : 'green';
                return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
            })}
        </span>
    )
},
{
    title: '赛事名称',
    dataIndex: 'name',
    key: 'name'
},
{
    title: '赛事阶段',
    dataIndex: 'level',
    key: 'level'
},
{
    title: '比赛时间',
    dataIndex: 'time',
    key: 'time'
},
{
    title: '对阵情况',
    dataIndex: 'fright',
    key: 'fright'
}, {
    title: '相关内容',
    key: 'info',
    dataIndex: 'info',
    render: (text, record) => (
        <span>
            <a href="javascript:;">{record.info}</a>
            <Divider type="vertical" />
            <a href="javascript:;">{record.video}</a>
        </span>
    )
}];

const data = [{
    key: '1',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  17: 00',
    fright: 'PVB 1:0 BMR',
    info: '数据',
    video: '视频'
},{
    key: '2',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  18: 00',
    fright: 'FB 1:0 ISURUS',
    info: '数据',
    video: '视频'
},{
    key: '3',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  19: 00',
    fright: 'PVB 1:0 ISURUS',
    info: '数据',
    video: '视频'
},{
    key: '4',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  20: 00',
    fright: 'FB 1:0 BMR',
    info: '数据',
    video: '视频'
},{
    key: '5',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  21: 00',
    fright: 'BMR 1:0 ISURUS',
    info: '数据',
    video: '视频'
},{
    key: '6',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  22: 00',
    fright: 'FB 0:1 PVB',
    info: '数据',
    video: '视频'
},{
    key: '7',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-01  23: 00',
    fright: 'BMR 1:0 PVB',
    info: '数据',
    video: '视频'
},{
    key: '8',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-02  00: 00',
    fright: 'ISURUS 1:0 FB',
    info: '数据',
    video: '视频'
},{
    key: '9',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-02  17: 00',
    fright: 'ISURUS 0:1 PVB',
    info: '数据',
    video: '视频'
},{
    key: '10',
    state: ['已结束'],
    name: '2019季中冠军赛',
    level: '入围赛',
    time: '2019-05-02  18: 00',
    fright: 'BMR 0:1 FB',
    info: '数据',
    video: '视频'
}];


export default class Course extends React.Component {
    render() {
        return (
            <Row className="courseTable"> 
                <Table columns={columns} dataSource={data} />
            </Row>
        )
    }
}