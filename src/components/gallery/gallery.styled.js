import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(242, 238, 238, 0.9),
    rgba(115, 36, 51, 0.99)
  );
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
      rgba(115, 36, 51, 0.99)
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export const AssetsContainer = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1em;
`;

export const Asset = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => css`
    background-image: linear-gradient(
        to left,
        rgba(242, 238, 238, 0.5),
        rgba(115, 36, 51, 0.5)
      ),
      url(${props.poster});
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;
