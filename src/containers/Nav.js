import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'

const Nav = () => {
    return (
        <div className='NavContainer'>
            <header>
                <div className='nav-left fl-left'>
                    <img alt='' src='https://static2.cnodejs.org/public/images/cnodejs_light.svg' />
                    <input className='nav-input' placeholder='请输入' />
                </div>
                <div className='nav-right fl-right'>
                    <ul>
                        <li>
                            <Link to='/'>首页</Link>
                        </li>
                        <li>
                            <Link to='/getstart'>新手入门</Link>
                        </li>
                        <li>
                            <Link to='/api'>API</Link>
                        </li>
                        <li>
                            <Link to='/about'>关于</Link>
                        </li>
                        <li>
                            <Link to='/login'>注册</Link>
                        </li>
                        <li>
                            <Link to='/signin'>登录</Link>
                        </li>
                        <li>
                            <Link to='/topic'></Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Nav;