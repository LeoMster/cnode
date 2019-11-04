import React, { useState, useEffect } from 'react'
import RouteCre from './RouteCre'
import axios from 'axios'
import $ from 'jquery'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'

const HomeContainer = (props) => {
    return (
        <div>
            {
                props.routes.map((route, i) => {
                    return (
                        <RouteCre key={i} {...route} />
                    )
                })
            }
        </div>
    )
}

const Tab = (props) => {
    $('.child-nav li').attr('class','li-style');
    let url;
    
    switch(props.p){
        case '/':
            url = 'page=';
            $('.child-nav li:nth-child(1)').addClass('nav-active');
            break;
        case '/tab=good':
            url = 'tab=good&&page=';
            $('.child-nav li:nth-child(2)').addClass('nav-active');
            break;
        case '/tab=share':
            url = 'tab=share&&page=';
            $('.child-nav li:nth-child(3)').addClass('nav-active');
            break;
        case '/tab=ask':
            url = 'tab=ask&&page=';
            $('.child-nav li:nth-child(4)').addClass('nav-active');
            break;
        case '/tab=job':
            url = 'tab=job&&page=';
            $('.child-nav li:nth-child(5)').addClass('nav-active');
            break;
        case '/tab=dev':
            url = 'tab=dev&&page=';
            $('.child-nav li:nth-child(6)').addClass('nav-active');
            break;
        default:
            console.log('');
    }

    const [page, setPage] = useState(`${url}1`);
    const getUrl = (p, ps) => {
        setPage(url+p);
    }
    
    const [data, setData] = useState([]);
    useEffect(() => {
        let didCancel = false;
        
        const fetchData = async () => {
            try {
                if (!didCancel) {
                    const result = await axios('https://cnodejs.org/api/v1/topics?' + page);
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
    }, [page]);

    return (
        <div className='containerDiv'>
            {
                data.map((item, index) => {
                    return (
                        <ul className='list-nav' key={index}>
                            <li className='imgLi'><img className='img-size' alt='' src={item.author.avatar_url} /></li>
                            <li className='visit'><p className='p1'>{`${item.reply_count}`}</p><p className='p2'>/</p><p className='p3'>{`${item.visit_count}`}</p></li>
                            <li className={item.top || item.good ? 'top' : item.tab === 'ask' || item.tab === 'share' ? 'tab' : ''}>
                                {
                                    item.top ? '置顶' :
                                        item.good ? '精华' :
                                            item.tab === 'ask' ? '问答' :
                                                item.tab === 'share' ? '分享' : ''
                                }
                            </li>
                            <li className='title'     
                                onClick={() => window.location.href = `https://leomster.github.io/cnode/build/index.html#/topic?id=${item.id}`}
                            >
                               {item.title}                            
                            </li>
                            <li className='little-img'><img className='little-img-size' alt='' src={item.author.avatar_url} /></li>
                            <li className='time'>1天前</li>
                        </ul>
                    )
                })
            }
            <div className='pages'>
                <Pagination
                    defaultCurrent={1}
                    total={100}
                    onChange={(p, ps) => getUrl(p, ps)}
                />
            </div>
        </div>

    )
}

export { HomeContainer, Tab }