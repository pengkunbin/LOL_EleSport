import React from 'react'
import {Row,Col} from 'antd'
import Header from 'component/header'
import 'antd/dist/antd.css'
import './index.scss'
import {NavLink} from   'react-router-dom'

export default class NewsDetail extends React.Component{
    render(){
        return(
            <Header menuType="second" />
        )
    }
}