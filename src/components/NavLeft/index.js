import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd'
import './index.less'
const { SubMenu, Item } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount () {
        const menuTreeNode = this.renderMenu(MenuConfig)
        console.log(menuTreeNode)
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Item key={item.key}>
                    {item.title}
                </Item>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='logo'>
                    <img src='https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png' alt='后台管理系统'/>
                    <h3>后台管理系统</h3>
                </div>
                <Menu theme='dark' mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}