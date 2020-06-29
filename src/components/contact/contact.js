import React, { useEffect, useState } from 'react';
import Slider from 'infinite-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '~/src/components/gallery/gallery.styled';
import { SectionTitle } from '~/src/commons/title';
import {
  Footer,
  Comments,
  Comment,
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

  const renderComments = comment => (
    <div>
      <Comment>
        <img alt={comment.autor} src={comment.avatar} />
        <div>
          <p>{comment.comment}</p>
          <span>{`@${comment.autor}`}</span>
        </div>
      </Comment>
    </div>
  );

  return (
    <Container>
      <SectionTitle primary={true}>Contactanos</SectionTitle>
      <Comments>
        {comments.length > 0 && (
          <Slider autoplay={true} autoplaySpeed={5000} arrows={false}>
            {comments.map(comment => renderComments(comment))}
          </Slider>
        )}
      </Comments>
      <SocialNetworks>
        <a
          href="https://www.instagram.com/pandinove/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a
          href="https://wa.me/12242797445?text=Quiero%20El%20Real%20pan%20andino%20venezolano"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} />
        </a>
        <a
          href="mailto:pandino.contactus@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="envelope" />
        </a>
        <a href="tel:1-224-279-7445" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="phone" />
        </a>
      </SocialNetworks>
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
