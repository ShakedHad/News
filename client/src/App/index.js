import React, { useState, useEffect, Fragment, use } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import './index.css';
import Posts from './Components/Posts';
import LoginModal from './Components/LoginModal';
import UserProvider from './Providers/UserProvide';

const { Header, Content } = Layout;

export default function ButtonAppBar() {
    const [loginModalVisibility, setLoginModalVisibility] = useState(false);
    const [authenticatedUser, setAuthenticatedUser] = useState({ userId: null, username: null });

    const login = async (credentials) => {
        try {
            const admin = (await Axios.post('/api/admins/authenticate', credentials)).data;
            console.log(admin);
            setAuthenticatedUser(admin);
            setLoginModalVisibility(false);
        } catch (e) {
            console.log('wrong password');
        }
    };

    return (
        <>
            <UserProvider.Provider value={authenticatedUser}>
                <Layout className="layout">
                    <Header>
                        <div className="logo">
                            <div>
                                <FontAwesomeIcon icon={faNewspaper} size="lg" color="#ffffff88" />
                            News Flash
                            </div>
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
                            <Menu.Item key="1">Home</Menu.Item>
                            {
                                authenticatedUser.userId !== null
                                    ? <div className="login-button"> Hello {authenticatedUser.username} </div>
                                    : <Button className="login-button" type="primary" onClick={() => setLoginModalVisibility(true)}>Login</Button>
                            }
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Posts />
                        </div>
                    </Content>
                </Layout>
                <LoginModal visible={loginModalVisibility} onOk={login} onCancel={() => setLoginModalVisibility(false)} />
            </UserProvider.Provider>
        </>
    );
}
