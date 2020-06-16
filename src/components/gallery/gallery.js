import React, { useEffect, useState } from 'react';
import Container from './gallery.styled';
import { SectionTitle } from '~/src/commons/title';
import InstgramApi from '~/src/libs/instagram-api';

const Gallery = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const postsFromInstagram = await InstgramApi.getInstgramPosts();
    setPosts(postsFromInstagram);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <SectionTitle primary={true}>Lo que nos gusta</SectionTitle>
      <div>
        {posts.data &&
          posts.data.user.edge_owner_to_timeline_media.edges.map(post => (
            <img alt="tales" src={post.node.display_url} />
          ))}
      </div>
    </Container>
  );
};

export default Gallery;
