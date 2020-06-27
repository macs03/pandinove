import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container, AssetsContainer, Asset } from './gallery.styled';
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
        <Asset poster={post.imageUrl}>
          <video controls={true} poster={post.imageUrl}>
            <track kind="captions" />
            <source src={post.videoUrl} type="video/mp4" />
          </video>
        </Asset>
      );
    }
    return (
      <Asset poster={post.imageUrl}>
        <img alt="tales" src={post.imageUrl} />
      </Asset>
    );
  };

  return (
    <Container>
      <SectionTitle primary={true}>Lo que nos gusta</SectionTitle>
      <AssetsContainer>
        {posts.length > 0 && (
          <Carousel
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
          >
            {posts.map(post => renderImageOrVideo(post))}
          </Carousel>
        )}
      </AssetsContainer>
    </Container>
  );
};

export default Gallery;
