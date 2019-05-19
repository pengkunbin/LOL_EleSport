import React from 'react'
import { Row, Col, Cascader } from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const options = [{
    value: '2019季中冠军赛',
    label: '2019季中冠军赛'
}, {
    value: '2019季中冠军赛',
    label: '2019季中冠军赛'
}, {
    value: '2019职业联赛',
    label: '2019职业联赛'
}, {
    value: '2019韩国职业联赛',
    label: '2019韩国职业联赛'
}, {
    value: '2019韩国职业联赛',
    label: '2019韩国职业联赛'
}, {
    value: '2019发展联赛',
    label: '2019发展联赛'
}, {
    value: '2018德玛西亚杯西安站',
    label: '2018德玛西亚杯西安站'
}, {
    value: '2018全明星赛',
    label: '2018全明星赛'
}, {
    value: '2018全球总决赛',
    label: '2018全球总决赛'
}, {
    value: '2018洲际系列赛',
    label: '2018洲际系列赛'
}];

let onChange = function (value, selectedOptions) {
    console.log(value, selectedOptions)
}

let filter = function (inputValue, path) {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1))
}

export default class Schedule extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div className="schedule">
                <Cascader
                    options={options}
                    onChange={onChange}
                    placeholder='2019季中冠军赛'
                    showSearch={{ filter }}
                />,
                <Slider ref={slider => (this.slider = slider)} {...settings} className="slider">
                    <div>
                        <div className="gamelist-item">
                        </div>
                    </div>
                    <div>
                        <div className="gamelist-item">
                            
                        </div>
                    </div>
                    <div>
                        <div className="gamelist-item">
                            
                        </div>
                    </div>
                    <div>
                        <div className="gamelist-item">
                            
                        </div>
                    </div>
                    <div>
                        <div className="gamelist-item">
                            
                        </div>
                    </div>
                    <div>
                        <div className="gamelist-item">
                            
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
} 