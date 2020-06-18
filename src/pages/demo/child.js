import React from 'react'
import './index.less'
export default class Child extends React.Component{
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount () {
        console.log('componentDidMount')
    }
    componentWillUpdate (newProps) {
        console.log(newProps)
    }
    updated (newProps) {
        console.log(newProps)
    }
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    render () {
        return (
            <div className='content'>
                <p>React子组件程序</p>
                <p>{this.props.count}</p>
            </div>
        )
    }
}