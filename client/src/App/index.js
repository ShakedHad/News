import React, { useState, useEffect, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Posts from './Components/Posts';

const { Header, Content } = Layout;

export default function ButtonAppBar() {
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo">
                        <div>
                            <FontAwesomeIcon icon={faNewspaper} size="lg" color="#ffffff88" />
                            News Flash
                        </div>
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Login</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Posts />
                    </div>
                </Content>
            </Layout>

            {/*
            <Container maxWidth="md">
                <Router>
                    <Switch>
                        <Route path="/login">
                            login form
                        </Route>
                        <Route path="/register">
                            register form
                        </Route>
                        <Route path="/about">
                            about page
                        </Route>
                        <Route path="/feed">
                            <PostsList />
                            <Fab color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Route>
                        <Route path="/userProfile">
                            user profile
                        </Route>
                        <Route path="/">
                            <PostsList />
                            <Fab color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Route>
                    </Switch>
                </Router>
            </Container> */}
        </>
    );
}
