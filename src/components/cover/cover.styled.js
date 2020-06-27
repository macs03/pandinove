import styled from 'styled-components';
import panCuadrado from '../../assets/images/pan-cuadrado.jpg';
import panLarge from '../../assets/images/pan-horizontal.jpeg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(63, 60, 59, 0.5), rgba(242, 238, 238, 0.5)),
    url(${panCuadrado});
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
    background: linear-gradient(rgba(63, 60, 59, 0.5), rgba(242, 238, 238, 0.5)),
      url(${panLarge});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export const Logo = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
  margin-bottom: 2em;
  background: linear-gradient(
    135deg,
    rgba(242, 238, 238, 0.9) 60.71%,
    rgba(63, 60, 59, 0.8)
  );
  @media only screen and (min-width: 500px) {
    width: 24em;
    height: 24em;
  }
`;
