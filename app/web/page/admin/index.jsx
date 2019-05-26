import React from 'react'
import { Row } from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
import Header from 'component/header'
import Footer from 'component/footer'

export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Row>
                    {this.props.children}
                </Row>
                <Footer />
            </div>
        )
    }
} 