import React, { useState, useEffect } from 'react';
import { Tabs, Card } from 'antd';
import axios from 'axios';
import PostModal from '../PostModal'

const { TabPane } = Tabs;
const { Meta } = Card;

export default function Posts() {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [displayedPost, setDisplayedPost] = useState({});
    const [displayedPostVisibillity ,setDisplayedPostVisibillity] = useState(false);

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
        <>
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
                                        onClick={() => {
                                            setDisplayedPost(post);
                                            setDisplayedPostVisibillity(true);
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
            <PostModal post={displayedPost} visible={displayedPostVisibillity} onCancel={() => setDisplayedPostVisibillity(false)} />
        </>
    );
}