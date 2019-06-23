import React from 'react'
import 'antd/dist/antd.css'
import './index.scss'

export default class TeamDetail extends React.Component{
    state = {
        item:{
            img:'//img.crawler.qq.com/lolwebvideo/20190124201051/ed73a9670f6f29aa4d6d29813a6b5feb/0',
            title:'BLG',
            subtitle:'BilibiliGaming',
            info:'BLG哔哩哔哩电竞俱乐部（BiliBiliGaming,简称BLG）是哔哩哔哩组建的电竞俱乐部，英雄联盟分部是LPL联盟成员之一，以“为信念干杯”为俱乐部口号。2016年，BLG前身IMay战队在一年内完成从LSPL到LPL再到世界赛“三级跳”。同年战队荣获国家体育总局“年度中国电竞新锐团队奖”、英雄联盟官方“战队进步最快俱乐部奖”。2018年，BLG战队收获“英雄联盟2018年度最佳营销案例奖”。同年十月，BLG战队与休斯顿火箭队达成电竞层面的战略合作，在行业内引起关注。未来BLG将继续发扬其坚忍不拔、永不放弃的战斗精神，并用其独特的战队文化助力电子竞技文化领域的发展。'
        }
    }
    render(){
        console.log(this.props.match.params.orderId)

        
        return(
            <div className="teamDetail-main">
                <div>
                    img
                </div>
                <div>
                    BLG
                </div>
            </div>
        )
    }
}