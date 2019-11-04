import React from 'react'
import {
    Home,
    Start,
    Api,
    About,
    Login,
    Sign,
    Topic
} from './list'
import { Tab } from './Home'
import { Switch } from 'react-router-dom'
import RouteCre from './RouteCre'
import '../../css/Con.css'

const routes = [
    {
        path: '/topic',
        component: Topic
    },
    {
        path: '/getstart',
        component: Start
    }, {
        path: '/api',
        component: Api
    }, {
        path: '/about',
        component: About
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/signin',
        component: Sign
    }, {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                component: Tab,
            }, {
                path: '/tab=good',
                component: Tab,
            }, {
                path: '/tab=share',
                component: Tab,
            }, {
                path: '/tab=ask',
                component: Tab,
            }, {
                path: '/tab=job',
                component: Tab,
            }, {
                path: '/tab=dev',
                component: Tab,
            }
        ]
    }
];

const Con = () => {
    return (
        <div className='ConDiv'>
            <div className='con-left fl-left'>
                <div>
                    <Switch>
                        {
                            routes.map((route, i) => {
                                return (
                                    <RouteCre key={i} {...route} />
                                )
                            })
                        }
                    </Switch>
                </div>
            </div>
            <div className='con-right fl-right'>
                <div className='right-one'>
                    <p className='cn'>CNode：Node.js专业中文社区</p>
                    <p className='sign'>您可以<a href='https://cnodejs.org/signin'>登录</a>或<a href='https://cnodejs.org/signup'>注册</a>, 也可以 </p>
                    <p className='btn'>通过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登录</p>
                </div>
                <div className='right-two'>
                    <img style={{ marginTop: '6px' }} alt='' src='https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_' />
                    <img alt='' src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS' />
                    <img alt='' src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-' />
                </div>
                <div className='right-three'>
                    <p style={{ padding: '6px 0 6px 6px', backgroundColor: 'rgb(233, 231, 231)', marginBottom: '6px' }}>无人回复的话题</p>
                    <li>采用hexo二次开发的个人博客，文艺风噢</li>
                    <li>使用sequlize时，如何对多对多模型筛选</li>
                    <li>http://www.cocky.fun/ 来这里聊天啊</li>
                    <li>【新手】用户注册时分两个步骤，请问临时</li>
                    <li>求助:server端无响应问题</li>
                </div>
                <div className='right-three' style={{ height: '350px' }}>
                    <p style={{ padding: '6px 0 6px 6px', backgroundColor: 'rgb(233, 231, 231)', marginBottom: '6px', cursor: 'pointer' }}>积分榜 TOP 100>></p>
                    <li>21735&nbsp;&nbsp;i5ting</li>
                    <li>15670&nbsp;&nbsp;alsotang</li>
                    <li>9350&nbsp;&nbsp;leapon</li>
                    <li>9065&nbsp;&nbsp;atian25</li>
                    <li>8780&nbsp;&nbsp;jiyinyiyong</li>
                    <li>7325&nbsp;&nbsp;yakczh</li>
                    <li>6815&nbsp;&nbsp;im-here</li>
                    <li>6095&nbsp;&nbsp;DevinXian</li>
                    <li>5815&nbsp;&nbsp;chapgaga</li>
                    <li>5350&nbsp;&nbsp;magicdawn</li>
                </div>
                <div className='right-five'>
                    <p style={{ padding: '6px 0 6px 6px', backgroundColor: 'rgb(233, 231, 231)', margin: '10px 0 6px 0', fontSize: '13px' }}>友情社区</p>
                    <li><img alt='' src='https://static2.cnodejs.org/public/images/ruby-china-20150529.png' /></li>
                    <li><img alt='' src='https://static2.cnodejs.org/public/images/golangtc-logo.png' /></li>
                    <li><img alt='' src='https://static2.cnodejs.org/public/images/phphub-logo.png' /></li>
                    <li><img alt='' src='https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK' /></li>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <p style={{ padding: '6px 0 6px 6px', backgroundColor: 'rgb(233, 231, 231)', margin: '10px 0 6px 0', fontSize: '13px' }}>客户端二维码</p>
                    <img style={{ width: '200px', height: '100%', paddingLeft: '20px' }} alt='' src='https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU' />
                    <p className='adr'>客户端源码地址</p>
                </div>
            </div>
        </div>
    )
}

export default Con