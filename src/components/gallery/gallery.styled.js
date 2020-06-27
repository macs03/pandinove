import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(242, 238, 238, 0.9), rgba(63, 60, 59, 0.99));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20% center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  /* ==========================================================================
     Media Queries - bigger than 500px
 ========================================================================== */
  @media only screen and (min-width: 500px) {
    background: linear-gradient(
      rgba(242, 238, 238, 0.9),
      rgba(63, 60, 59, 0.99)
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export const AssetsContainer = styled.div`
  width: 95%;
  height: 90%;
  margin-top: 4em;
  > div {
    > div {
      height: 80vh;
      border-radius: 8px;
      > div {
        height: 100%;
        border-radius: 8px;
        > ul {
          height: 100%;
          border-radius: 8px;
          > li {
            height: 100%;
            border-radius: 8px;
          }
        }
      }
    }
  }
`;

export const Asset = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 8px;
  ${props => css`
    background-image: linear-gradient(
        to left,
        rgba(242, 238, 238, 0.5),
        rgba(63, 60, 59, 0.5)
      ),
      url(${props.poster});
    background-repeat: no-repeat;
    background-size: cover;
  `}
  >img,video {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
  }

  /* ==========================================================================
     Media Queries - bigger than 500px
 ========================================================================== */
  @media only screen and (min-width: 500px) {
    > img,
    video {
      padding: 10em;
    }
  }

  @media only screen and (min-width: 1500px) {
    > img,
    video {
      padding: 30em;
    }
  }
`;
