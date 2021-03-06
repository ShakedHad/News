import React, { useState, useEffect, useContext } from 'react';
import { Tabs, Card, Button, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import PostModal from '../PostModal';
import UserProvider from '../../Providers/UserProvide';
import AddCategoryModal from '../AddCategoryModal';
import AddPostModal from '../AddPostModal/Index';

const { TabPane } = Tabs;
const { Meta } = Card;

export default function Posts() {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [displayedPost, setDisplayedPost] = useState({});
    const [displayedCategory, setDisplayedCategory] = useState({});
    const [displayedPostModalVisibility, setDisplayedPostModalVisibility] = useState(false);
    const [newCategoryModalVisibility, setNewCategoryModalVisibility] = useState(false);
    const [newPostModalVisibility, setNewPostModalVisibility] = useState(false);
    const loggedAdmin = useContext(UserProvider);

    const onPostClicked = async (post) => {
        setDisplayedPost(post);
        setDisplayedPostModalVisibility(true);
        const ok = await axios.post(`/api/posts/${post._id}/views`);
        const updatedPosts = posts;
        const updatedPost = updatedPosts.find((postInList) => postInList._id === post._id);
        updatedPost.numberOfViews += 1;
        setPosts(updatedPosts);
    };

    const showAddCategoryModal = () => {
        setNewCategoryModalVisibility(true);
    };

    const addCategory = async (values) => {
        const newCategory = (await axios.put('/api/categories', values)).data;
        setNewCategoryModalVisibility(false);
        console.log([...categories, newCategory]);
        setCategories([...categories, newCategory]);
    };

    const addPost = async (values) => {
        const newPost = (await axios.put('/api/posts', { ...values, category: displayedCategory._id })).data;
        setNewPostModalVisibility(false);
        setPosts([...posts, newPost]);
    };

    const filterPosts = (date) => {
        setPosts(posts.filter((post) => date.isSame(moment(post.date), 'day')));
    };

    useEffect(() => {
        (async () => {
            const categoriesRequest = await axios.get('/api/categories');
            console.log(categoriesRequest.data);
            setCategories(categoriesRequest.data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const postsRequest = await axios.get('/api/posts');
            console.log(postsRequest.data);
            setPosts(postsRequest.data);
        })();
    }, []);

    return (
        <>
            <Tabs type={loggedAdmin.userId ? 'editable-card' : 'card'} onEdit={showAddCategoryModal}>
                {
                    categories.map((category, array, index) => (
                        <TabPane tab={category.name} key={category._id} tabKey={index} className="postsContainer" closable={false}>
                            <div className="newPostButtonContainer">
                                <DatePicker onChange={filterPosts} />
                                {
                                    loggedAdmin.userId
                                        ? (
                                            <Button
                                                className="newPostButton"
                                                icon={<PlusOutlined />}
                                                onClick={() => {
                                                    setDisplayedCategory(category);
                                                    setNewPostModalVisibility(true);
                                                }}
                                            />
                                        )
                                        : null
                                }
                            </div>
                            <div className="postContainer">
                                {
                                    posts.filter((post) => post.category === category._id).map((post) => (
                                        <Card
                                            className="post"
                                            hoverable
                                            cover={<img alt="example" src="https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg" />}
                                            key={post._id}
                                            onClick={() => onPostClicked(post)}
                                        >
                                            <Meta
                                                title={post.title}
                                                description={`${post.content} (${moment(post.date).format('DD/MM/YYYY')})`}
                                            />
                                        </Card>
                                    ))
                                }
                            </div>
                        </TabPane>
                    ))
                }
            </Tabs>
            <PostModal post={displayedPost} visible={displayedPostModalVisibility} onCancel={() => setDisplayedPostModalVisibility(false)} />
            <AddCategoryModal visible={newCategoryModalVisibility} onOk={addCategory} onCancel={() => setNewCategoryModalVisibility(false)} />
            <AddPostModal visible={newPostModalVisibility} onOk={addPost} onCancel={() => setNewPostModalVisibility(false)} />
        </>
    );
}