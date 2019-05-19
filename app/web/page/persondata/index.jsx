import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import './index.scss'
import DataTitle from '../../component/dataTitle'


export default class PersonData extends React.Component {
    state = {
        current: 'team'
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }


    render() {
        return (
            <Row className="dataTable">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="team">
                        战队数据
                    </Menu.Item>
                    <Menu.Item key="person">
                        个人数据
                    </Menu.Item>
                    <Menu.Item key="hero">
                        英雄数据
                    </Menu.Item>
                </Menu>
                <DataTitle current={this.state.current}/>
            </Row>
        )
    }
}