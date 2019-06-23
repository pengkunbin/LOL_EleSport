import React from 'react'
import 'antd/dist/antd.css'
import './index.scss'
import Axios from '../../axios/index'
import CommentList from '../../component/comment'

export default class NewsDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        newsinfo: {
            content: '<p>4月7日早上结束的LCS四强赛中，TSM在先失两局的情况下，连扳三局击败C9又一次杀进决赛。</p><p>第三局赛点局中，C9拿下大龙强势推进的时候，绝境中Bjergsen阿卡丽绕后打出一波天秀操作，阻止对方3：0结束比赛，并带领TSM展开反攻之势。</p><p><img src=\'http://inews.gtimg.com/newsapp_match/0/8462419991/0\' alt=\'\' width=\'600\' style=\'display: block; margin-left: auto; margin-right: auto;\' /></p><p>而在最后一波团战中，C9大胡子Zeyzal牛头绕后开团无果，反被TSM Zevn的EZ无解Poke，吸血鬼不断追击拿下三杀。最终TSM一波团灭C9拿下决胜局的胜利！</p><p>一度被逼到悬崖边上的TSM背水一战，顽强地进行反攻让二追三再次成功晋级决赛。最后三局中，蓄须明志的比尔森用阿卡丽、佐伊和时光分别打出了9/0/6，2/0/8，4/0/9的完美数据，功不可没！（图源：LOLesports）</p><p><img src=\'http://inews.gtimg.com/newsapp_match/0/8462605873/0\' alt=\'\' width=\'600\' style=\'display: block; margin-left: auto; margin-right: auto;\' /></p><p>比赛结束后TSM灵魂选手Bjergsen更新推特：&ldquo;TSM再次进入了决赛！下一个目标是冠军奖杯。&rdquo;（图源：LOLesports）</p><p><img src=\'http://inews.gtimg.com/newsapp_match/0/8462623516/0\' alt=\'\' width=\'600\' style=\'display: block; margin-left: auto; margin-right: auto;\' /></p><p>下一场TL与FLY将会争夺第二各决赛名额，北美内战幻神的称号最终将会归属TSM还是大师兄呢？</p>'
        }
    }

    componentDidMount() {
        this.requestList()
    }

    requestList = () => {
        Axios.get({
            url: '/news/findNewsInfoObject.do',
            data: {
                params: {
                    newsId: this.props
                }
            }
        }).then((res) => {
            let newsinfo = res.data
            this.setState({ newsinfo: newsinfo })
        })
    }

    render() {
        return (
            <div>
                <div
                    className="newsdetail-main"
                    dangerouslySetInnerHTML={{ __html: this.state.newsinfo.content }}
                >
                </div>
                <CommentList/>
            </div>
        )
    }
}
