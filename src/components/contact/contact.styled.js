import styled from 'styled-components';

import colors from '~/src/styles/colors';

export const Comments = styled.section`
  height: 150px;
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
  background: blue;
`;

export const ContactForm = styled.section`
  height: 500px;
  width: 100%;
  background: yellow;
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
