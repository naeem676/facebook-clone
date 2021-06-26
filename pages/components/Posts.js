import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import { db } from './firebase';
import Post from './Post';

const Posts = ({posts}) => {
    const [realtimePost] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
    return (
        <div>
            {
                realtimePost ?
                realtimePost?.docs.map((post) =>(
                     <Post name={post.data().name}
                     message={post.data().message}
                     email={post.data().email}
                     timestamp={post.data().timestamp}
                     image={post.data().image}
                     postImage={post.data().postImage}
                     key={post.id} />)) : (
                         posts.map((post )=> <Post name={post.name}
                         message={post.message}
                         email={post.email}
                         timestamp={post.timestamp}
                         image={post.image}
                         postImage={post.postImage}
                         key={post.id} />)
                     )
            }
        </div>
    );
};

export default Posts;