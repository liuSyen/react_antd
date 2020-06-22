import React from 'react'
import {Row, Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
export default class Header extends React.Component {
    state = {
    }
    componentWillMount () {
        this.setState({
            userName: '三叶'
        })
        setInterval(() => {
            let systime = Util.formateDate(new Date().getTime())
            this.setState({
                systime
            })
        }, 1000)
    }
    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎，{this.state.userName}</span>
                        <a href='javascript;'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span='4' className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.systime}</span>
                        <span>晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}