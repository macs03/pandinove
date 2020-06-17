import React, { useEffect, useState } from 'react';
import Container from './gallery.styled';
import { SectionTitle } from '~/src/commons/title';
import InstgramApi from '~/src/libs/instagram-api';

const Gallery = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const postsFromInstagram = await InstgramApi.getInstgramPosts();
    setPosts(postsFromInstagram.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderImageOrVideo = post => {
    if (post.isVideo) {
      return (
        <video controls={true}>
          <track kind="captions" />
          <source src={post.videoUrl} type="video/mp4" />
        </video>
      );
    }
    return <img alt="tales" src={post.imageUrl} />;
  };

  return (
    <Container>
      <SectionTitle primary={true}>Lo que nos gusta</SectionTitle>
      <div>
        {posts.length > 0 && posts.map(post => renderImageOrVideo(post))}
      </div>
    </Container>
  );
};

export default Gallery;
