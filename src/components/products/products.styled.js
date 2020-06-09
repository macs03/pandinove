import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(178, 130, 140, 0.5),
    rgba(242, 238, 238, 0.5)
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
      rgba(178, 130, 140, 0.5),
      rgba(242, 238, 238, 0.5)
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export default Container;
