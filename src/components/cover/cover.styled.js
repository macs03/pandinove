import styled from 'styled-components';
import panCuadrado from '../../assets/images/pan-cuadrado.jpg';
import panLarge from '../../assets/images/pan-horizontal.jpeg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
    url(${panCuadrado});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20% center;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* ==========================================================================
     Media Queries - bigger than 500px
 ========================================================================== */
  @media only screen and (min-width: 500px) {
    background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
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
`;
