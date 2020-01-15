import React, { useEffect } from 'react';
import axios from 'axios';

export default function PostsList() {

    let posts; 

    useEffect(() => {
        (() => {
            console.log('effect happened');
        })();
        axios.get('/api/posts').then(data => {
            posts = data;
            console.log(posts)});

    });


    return (
        <div>
{posts.map(post => <p>hi</p>)}
        </div>
    );
}