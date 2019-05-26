import React from 'react'
import Header from 'component/header'
import 'antd/dist/antd.css'
import './index.scss'
import Footer from 'component/footer'

export default class NewsDetail extends React.Component{
    render(){
        return(
            <div>
                <Header menuType="second" />
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}