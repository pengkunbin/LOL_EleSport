import React from 'react'
import { Row, Col } from 'antd'
import './index.scss'
import { Map } from 'react-amap';


export default class PersonData extends React.Component {
    state = {
        index: 0
    }
    handleClick = function (i) {
        this.setState({
            index: i
        });
        console.log(this.state.index)
    }

    componentWillMount() {

    }

    render() {
        let msg = [
            {
                index: 0,
                title: '2019LDL春季赛季后赛',
                state: '售票开启',
                time: '2019-04-29'
            }]
        let list = msg.map((item) => {
            return <li
                key={item.index}
                onClick={() => { this.handleClick(item.index) }}
                className={this.state.index == item.index ? 'active' : ''} >
                <h4>{item.title}</h4>
                <div className="h3">{item.state}</div>
                <p>{item.time}</p>
            </li>
        })
        return (
            <div className="ticket-main">
                <Row className="ticket-title">
                    <ul className="card">
                        {list}
                    </ul>
                </Row>
                <Row className="ticket-img">
                    <img className="vTicketImg" src="//img.crawler.qq.com/lolwebvideo/20190426171453/3a31b173a07d801f432d48f1141292dc/0" />
                    <div className="detail">
                        <h1>2019LDL春季赛季后赛</h1>
                        <div className="info">
                            <div className="info1">
                                <div className="left">
                                    <div className="local">
                                        比赛场馆：
                                    </div>
                                    <div className="local-info">虹桥天地演艺中心</div>
                                </div>
                                <div className="how-to-play">如何达到场馆？</div>
                                <div className="should-know">购票须知</div>
                            </div>
                            <div className="info2">
                                售票时间：2019-04-29 19:00:00
                                <span>至</span>
                                2019-05-11 14:00:00
                                <div className="going">进行中</div>
                            </div>
                            <div className="info3">
                                <div className="warn">
                                    温馨提示：
                                </div>
                                本场赛事采用本人实名身份证购票入场，请务必携带本人购票身份证进入会场！</div>
                        </div>
                        <div className="money">
                            <div className="before"><div className="time">5月4日-5月9日</div>     <div className="price">票价：0 RMB</div></div>
                            <div className="after"><div className="time">总决赛-5月11日</div>     <div className="price">票价：0 RMB</div></div>
                        </div>
                        <button>
                            已售罄
                        </button>
                    </div>
                </Row>
                <Row className="league">
                    <div className="league-logo">
                        <img id="GameLogo" src="//img.crawler.qq.com/lolwebvideo/20190219174047/fc1ffae86c13e46ded47307e91e9c336/0" />
                    </div>
                    <div className="league-info">
                        <h2>
                            <span id="GameName">
                                2019发展联赛
                            </span>
                            赛事简介
                        </h2>
                        <div className="league-intr">
                            <span id="GameDesc">
                                英雄联盟职业发展联赛（LOLDevelopmentLeague，简称：LDL），是英雄联盟于2018年推出的全新职业赛事体系，旨在促进英雄联盟职业电竞生态稳定健康发展。LDL将着力于新人选手的培养，持续为LPL输送优质选手，与LPL（英雄联盟职业联赛）形成完整的两级职业赛事体系。2019年的LDL分为春季赛与夏季赛，并启用上海、深圳两地作为赛点。25支参赛队伍以单循环积分赛的形式进行对抗，根据积分排名，前12的队伍将会获得季后赛资格，决出当季最终的冠亚季军。
                            </span>
                        </div>
                    </div>
                </Row>
                <Row className="location">
                    <p>场馆信息</p>
                    <div className="map">
                        <Map amapkey='c26a22fb5f1dd14ae13db62cdfe18f8c' center={[121.3156500000, 31.1934000000]} zoom={20} />
                    </div>
                    <div className="mapinfo">
                        <div class="info-cont">
                            <h5>场馆名称</h5>
                            <div class="info-text">
                                <span id="vVenueNameToo">虹桥天地演艺中心</span>
                            </div>
                            <h5>场馆地址</h5>
                            <div class="info-text">
                                <span id="vVenueAddress">上海市闵行区绍虹路33号3楼虹桥天地演艺中心</span>
                            </div>
                            <h5>周边交通</h5>
                            <div class="info-text">
                                <span id="vTraffic">
                                    周边交通：
                                    <br />
                                    公交:
                                    <br />
                                    虹桥西交通中心（公交站）：173路 320路 835路 虹练定班线 虹南快线 虹桥枢纽10路 虹桥枢纽10路九亭区间 虹桥枢纽1路 虹桥枢纽5路 虹桥枢纽6路 虹桥枢纽7路 虹桥枢纽8路 嘉虹快线 莘虹快线
                                    <br />
                                    绍虹路申虹路：闵行28路
                                    <br />
                                    申长路舟虹路：173路 虹桥商务区1路 虹桥商务区2路内圈
                                    <br />
                                    <br />
                                    地铁:
                                    <br />
                                    虹桥火车站：地铁2号线、地铁10号线、轨道交通17号线
                                    <br />
                                    <br />
                                    汽车：
                                    <br />
                                    上海虹桥客运西站：上海市闵行区申虹路298号
                                    <br />
                                    <br />
                                    停车场：
                                    <br />
                                    虹桥天地购物中心-停车库：上海市闵行区申虹路99号
                                </span>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className="faq">
                    <div className="faq-title">
                        <h2>FAQ</h2>
                        <div className="faq-other">如果以下回答未能解决您的问题，还可以 <a href="//crm2.qq.com/page/portalpage/wpa.php?uin=40012345&amp;f=1&amp;ty=1&amp;ap=000011:400998:|m:11|f:Gyxlm3" target="_blank" className="contact-btn">马上联系客服</a></div>
                    </div>
                    <div className="faq-cont">

                        <div>
                            <h4>购买观赛票后，怎样才能获得对应的奖励皮肤？</h4>
                            <p>当天凭票进场扫码观赛后，30个工作日之内将会发放皮肤领取方法，敬请关注。当天凭票进场扫码观赛后，30个工作日之内将会发放皮肤领取方法，敬请关注。</p>
                        </div>

                        <div>
                            <h4>购买观赛票后，怎样才能获得对应的奖励皮肤？</h4>
                            <p>当天凭票进场扫码观赛后，30个工作日之内将会发放皮肤领取方法，敬请关注。当天凭票进场扫码观赛后，30个工作日之内将会发放皮肤领取方法，敬请关注。</p>
                        </div>

                        <div>
                            <h4>购买观赛票后，怎样才能获得对应的奖励皮肤？</h4>
                            <p>当天凭票进场扫码观赛后，30个工作日之内将会发放皮肤领取方法，敬请关注。</p>
                        </div>

                        <div>
                            <h4>购买观赛票后，怎样才能获得对应的奖励皮肤？</h4>
                            <p>当天凭票进场扫码观赛后，30个工作日之内将会发放皮肤领取方法，敬请关注。</p>
                        </div>

                        <div>
                            <h4><span>购票时间（开始以及结束）</span></h4>
                            <p><span>2019年04月29日14:00 开启季后赛门票售卖。每个比赛日的门票售卖在比赛开始的前1天停止售卖。</span></p>
                        </div>

                        <div>
                            <h4><span>购买的票是什么形式（电子票还是纸质的）</span></h4>
                            <p><span>电子票（身份证）。入场必须携带购票身份证入场，不接受其他入场凭证。</span></p>
                        </div>

                        <div>
                            <h4><span>购票时遇到问题（如重复购买、购买失败等）是咨询卖票相关人员还是英雄联盟官方客服？</span></h4>
                            <p><span>购票失败、重复购票订单核实等购票问题请咨询微赛客服。</span></p>
                        </div>

                        <div>
                            <h4><span>取票是在哪里进行，可以现场进行取票吗？取票时间有限制吗？</span></h4>
                            <p><span>门票是购票时填写的实名身份证，使用实名身份证验证入场。</span></p>
                        </div>

                        <div>
                            <h4><span>如果有事临时去不了，可以把票给朋友吗？</span></h4>
                            <p><span>本次购票使用实名身份证验证入场，必须携带购票身份证。</span></p>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}