import React from 'react'
import '../css/Fo.css'

const Fo = () => {
    return (
        <div className='FooterDiv'>
            <div className='foo-container'>
                <p style={{cursor: 'pointer'}}>RSS</p>
                <p style={{marginLeft: 5,marginRight: 5,color: 'rgb(208, 203, 203)'}}>|</p>
                <p style={{cursor: 'pointer'}}>源码地址</p>
            </div>
            <div className='text'>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
            <div className='import'>
                <p className='p11'>服务器赞助商为<img alt='' src='https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9'/>,</p>
                <p className='p22'>存储赞助商为<img alt='' src='https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX'/>,</p>
                <p className='p33'>由<img alt='' src='https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD'/>提供应用性能服务。</p>
                <p className='p44'>新手搭建 Node.js 服务器，推荐使用无需备案的<a href='https://www.digitalocean.com/?refcode=eba02656eeb3'>DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
        </div>
    )
}

export default Fo