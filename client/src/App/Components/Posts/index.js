import React, { useState, useEffect, useContext } from 'react';
import { Tabs, Card } from 'antd';
import axios from 'axios';
import PostModal from '../PostModal';
import UserProvider from '../../Providers/UserProvide';
import AddCategoryModal from '../AddCategoryModal';

const { TabPane } = Tabs;
const { Meta } = Card;

export default function Posts() {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [displayedPost, setDisplayedPost] = useState({});
    const [displayedPostModalVisibility, setDisplayedPostModalVisibility] = useState(false);
    const [newCategoryModalVisibility, setNewCategoryModalVisibility] = useState(false);
    const loggedAdmin = useContext(UserProvider);

    const showAddCategoryModal = () => {
        setNewCategoryModalVisibility(true);
    };

    const addCategory = async (values) => {
        const newCategory = (await axios.put('/api/categories', values)).data;
        setNewCategoryModalVisibility(false);
        console.log([...categories, newCategory]);
        setCategories([...categories, newCategory]);
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
                            {
                                posts.filter((post) => post.category === category._id).map((post) => (
                                    <Card
                                        className="post"
                                        hoverable
                                        cover={<img alt="example" src="https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg" />}
                                        key={post._id}
                                        onClick={() => {
                                            setDisplayedPost(post);
                                            setDisplayedPostModalVisibility(true);
                                        }}
                                    >
                                        <Meta title={post.title} description={post.content} />
                                    </Card>
                                ))
                            }
                        </TabPane>
                    ))
                }
            </Tabs>
            <PostModal post={displayedPost} visible={displayedPostModalVisibility} onCancel={() => setDisplayedPostModalVisibility(false)} />
            <AddCategoryModal visible={newCategoryModalVisibility} onOk={addCategory} onCancel={() => setNewCategoryModalVisibility(false)} />
        </>
    );
}