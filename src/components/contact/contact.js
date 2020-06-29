import React, { useEffect, useState } from 'react';
import { Container } from '~/src/components/gallery/gallery.styled';
import { SectionTitle } from '~/src/commons/title';
import {
  Footer,
  Comments,
  SocialNetworks,
  ContactForm
} from '~/src/components/contact/contact.styled';

import InstgramApi from '~/src/libs/instagram-api';

const Contact = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const commentsFromInstagram = await InstgramApi.getInstgramPosts();
    setComments(commentsFromInstagram.topComments);
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);

  return (
    <Container>
      <SectionTitle primary={true}>Contactanos</SectionTitle>
      <Comments />
      <SocialNetworks />
      <ContactForm />
      <Footer>
        <div>
          <span>Pandinove &copy;</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/miguelcardenas03"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Upload
          </a>
        </div>
      </Footer>
    </Container>
  );
};

export default Contact;
