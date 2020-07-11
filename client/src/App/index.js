import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Layout, Menu, Typography, Tabs, Card } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './index.css';

const { Header, Content } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;

export default function ButtonAppBar() {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const categoriesRequest = await axios.get('/api/categories');
            console.log(categoriesRequest.data);
            setCategories(categoriesRequest.data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const postsRequst = await axios.get('/api/posts');
            console.log(postsRequst.data);
            setPosts(postsRequst.data);
        })();
    }, []);

    return (
        <div>
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
                        <Tabs>
                            {
                                categories.map((category, array, index) => (
                                    <TabPane tab={category.name} key={category._id} tabKey={index} className="postsContainer">
                                        {
                                            posts.filter((post) => post.category === category._id).map((post) => (
                                                <Card
                                                    className="post"
                                                    hoverable
                                                    cover={<img alt="example" src="https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg" />}
                                                    key={post._id}
                                                >
                                                    <Meta title={post.title} description={post.content} />
                                                </Card>
                                            ))
                                        }
                                    </TabPane>
                                ))
                            }
                        </Tabs>
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
        </div>
    );
}
