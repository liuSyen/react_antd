import React from 'react'
import Child from './child'
import {Button} from 'antd'
export default class Life extends React.Component{
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount () {
        console.log('componentDidMount')
    }
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    handAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render () {
        return (
            <div>
                <p>React 声明周期</p>
                <Button type="primary" onClick={this.handAdd}>antd 点击一下</Button>
                <p>{this.state.count}</p>
                <Child count={this.state.count}/>
            </div>
        )
    }
}