import React, { useState, useEffect } from 'react'
import './css/list.css'
import { Link } from 'react-router-dom'
import { HomeContainer } from './Home'
import axios from 'axios'
import $ from 'jquery'

const Home = ({ routes }) => {
    return (
        <div>
            <div className='child-nav'>
                <ul className='child-nav'>
                    <li className='li-style nav-active'>
                        <Link to='/'>全部</Link>
                    </li>
                    <li className='li-style'>
                        <Link to='/tab=good'>精华</Link>
                    </li>
                    <li className='li-style'>
                        <Link to='/tab=share'>分享</Link>
                    </li>
                    <li className='li-style'>
                        <Link to='/tab=ask'>问答</Link>
                    </li>
                    <li className='li-style'>
                        <Link to='/tab=job'>招聘</Link>
                    </li>
                    <li className='li-style'>
                        <Link to='/tab=dev'>客户端测试</Link>
                    </li>
                </ul>
            </div>
            <HomeContainer routes={routes} />
        </div>
    )
}



const Start = () => {
    return (
        <h3>
            Start
        </h3>
    )
}

const Api = () => {
    return (
        <h3>
            Api
        </h3>
    )
}

const About = () => {
    return (
        <h3>
            About
        </h3>
    )
}

const Login = () => {
    return (
        <h3>
            Login
        </h3>
    )
}

const Sign = () => {
    const jump = () => {
        window.location.href = 'https://leomster.github.io/cnode/build/index.html';
    }
    return (
        <div>
            <div className='child-nav'>
                <p className='signP'><span style={{color:'#79BD41'}}>主页</span><span>/</span><span>登录</span></p>
            </div>
            <div className='input-div'>
                <div className='in' style={{marginTop: '80px'}}>
                    <p>用户名</p><input  />
                </div>
                <div className='in'>
                    <p>密码&nbsp;&nbsp;&nbsp;</p><input  />
                </div>
                <div className='btnP'>
                    <p className='btn2' onClick={jump}>登录</p>
                    <p className='btn1' onClick={jump}>通过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登录</p>
                    <p className='textP'>忘记密码了？</p>
                </div>
            </div>
            <div className='cover'></div>
        </div>
    )
}

const Topic = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let didCancel = false;
        
        const fetchData = async () => {
            try {
                if (!didCancel) {
                    const result = await axios('https://cnodejs.org/api/v1/topic/' + props.location.search.split('?')[1].split('=')[1]);
                    setData(result.data.data);
                }
            } catch (error) {
                if (!didCancel) {
                    console.log(error);
                }
            }
        }

        fetchData();

        return () => {
            didCancel = true;
        }
    },[props.location.search]);

    const mk = () => {
        $('.mkDiv').html(data.content);
    }
    return (
        <div className='mkDiv' show={mk()}></div>
    )
}



export { Home, Start, Api, About, Login, Sign, Topic}