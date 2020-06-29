import styled from 'styled-components';

import colors from '~/src/styles/colors';

export const Comments = styled.section`
  height: 120px;
  width: 100%;
  margin-top: 2em;
  display: flex;

  > div {
    width: 100%;
  }

  /* ==========================================================================
     Media Queries - bigger than 500px
 ========================================================================== */
  @media only screen and (min-width: 500px) {
    margin-top: 0;
  }
`;

export const Comment = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 6em;
    height: 6em;
    border-radius: 50%;
  }
  > div {
    margin: 0 0 0 2em;
    > p {
      color: ${colors.letters};
      font-size: 1em;
      font-family: 'KaushanScript-Regular';
    }
    > span {
      color: ${colors.letters};
      font-size: 1em;
      text-decoration: none;
      font-family: 'Oswald-Regular';
    }
  }
`;

export const SocialNetworks = styled.section`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.secondary};
    margin: 0 1.5em;
    background: ${colors.letters};
    height: 2em;
    width: 2em;
    border-radius: 50%;
  }
`;

export const ContactForm = styled.section`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  > form {
    align-self: center;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 90%;
    > input,
    textarea {
      width: 100%;
      margin: 0.8em 0;
      border-radius: 0.25em;
      border-style: none;
    }
    > input {
      height: 30px;
    }
  }
`;

export const Footer = styled.section`
  background: ${colors.letters};
  height: 50px;
  width: 120%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  > div {
    margin: 0 2em;
    > a {
      color: ${colors.secondary};
      font-size: 1em;
      text-decoration: none;
      font-family: 'Oswald-Regular';
    }
    > span {
      color: ${colors.secondary};
      font-size: 1.2em;
      font-family: 'Oswald-Regular';
    }
  }
`;
