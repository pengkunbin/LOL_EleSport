import React from 'react'
import { Row, Col, Menu, Icon, Card, Pagination } from 'antd'
import 'antd/dist/antd.css'
import './index.scss'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
    width: '25%',
    textAlign: 'center'
};

const detail = ()=>{
    window.open('/#/common/visiondetail/123456', '_blank')
}

const tabListNoTitle = [{
    key: 'all',
    tab: '所有'
}, {
    key: 'review',
    tab: '全场回顾'
}, {
    key: 'viewquick',
    tab: '赛事速看'
}, {
    key: 'peaktime',
    tab: '巅峰时刻'
}]

const contentListNoTitle = {
    all:
        <div>
            <Card.Grid style={gridStyle} onClick={() =>detail()}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
            <Card.Grid style={gridStyle}>
                <img src='//puui.qpic.cn/vpic/0/l00307smsvf.png/0' width="300">
                </img>
                <p>'MSI击杀时刻Day5：Zeros剑姬1V2反杀一人!'</p>
                <br />
            </Card.Grid>
        </div>,
    review: <p>app content</p>,
    viewquick: <p>project content</p>,
    peaktime: <p>peaktime</p>
}


export default class Vision extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'all'
    }

    onTabChange = (key, type) => {
        console.log(key, type)
        this.setState({ [type]: key })
    }

    render() {
        return (
            <Row className="visionRow">
                <Card
                    style={{ width: '100%', background: '#FAFAFA' }}
                    tabList={tabListNoTitle}
                    bordered={false}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}

                </Card>
                <Row className="PaRow">
                    <Col span={16}></Col>
                    <Col span={6}><Pagination defaultCurrent={20} total={80} /></Col>
                    <Col span={2}></Col>
                </Row>
            </Row>
        )
    }
} 