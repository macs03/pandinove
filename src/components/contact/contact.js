import React, { useEffect, useState } from 'react';
import Slider from 'infinite-react-carousel';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';
import emailJs from 'emailjs-com';
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

const userID = 'user_XhWjzmKsGW4hcx0ogon6e';
const serviceID = 'balloonjoy';
const templateID = 'template_ziReR0i8';

const Contact = () => {
  // Init service for email
  emailJs.init(userID);

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const commentsFromInstagram = await InstgramApi.getInstgramPosts();
    setComments(commentsFromInstagram.topComments);
  };

  useEffect(() => {
    getComments();
  }, []);

  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const { addToast } = useToasts(); // Initialise toast

  const onSubmit = (data, event) => {
    const templateParams = {
      reply_to: data.email,
      subject: data.subject,
      from_name: data.fullname,
      to_name: 'Pandinove',
      cell_phone: data.phone,
      message_html: data.message
    };

    emailJs.send(serviceID, templateID, templateParams).then(
      () => {
        addToast('Your Message has been send', {
          appearance: 'success',
          autoDismiss: true
        });
        event.target.reset();
      },
      () => {
        addToast('Somenthing went wrong', {
          appearance: 'error',
          autoDismiss: true
        });
      }
    );
  };

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
      <ContactForm>
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <input
            name="fullname"
            placeholder="Full Name"
            ref={register({ required: true })}
          />
          {errors.fullname && (
            <span className="contact-title">Full name is required.</span>
          )}
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            })}
          />
          {errors.email && (
            <span className="contact-title">E-mail is required.</span>
          )}
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            ref={register({ pattern: /\d+/, required: true })}
          />
          {errors.phone && (
            <span className="contact-title">
              Please enter number for phone.
            </span>
          )}

          <input
            name="subject"
            placeholder="Subject"
            ref={register({ required: true })}
          />
          {errors.fullname && (
            <span className="contact-title">Subject is required.</span>
          )}

          <textarea
            name="message"
            form="form"
            placeholder="Tell us more about your event (number of kids, how many hours of service, type of event) or any other important detail."
            maxLength={200}
            rows="10"
            ref={register({
              required: true,
              maxlength: 200,
              minLength: 20
            })}
          />
          {errors.message && (
            <span className="contact-title">
              Please enter your message, with at least 20 characters
            </span>
          )}

          <button className="primary-button send-button" type="submit">
            <span className="button-text">Send Message</span>
          </button>
        </form>
      </ContactForm>
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
