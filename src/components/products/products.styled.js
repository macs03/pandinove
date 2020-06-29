import styled from 'styled-components';
import colors from '~/src/styles/colors';
import panCuadrado from '../../assets/images/pan-cuadrado.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(63, 60, 59, 0.99), rgba(242, 237, 238, 0.9));
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
      rgba(63, 60, 59, 0.99),
      rgba(242, 238, 238, 0.9)
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export const ProductCard = styled.section`
  background: linear-gradient(
    to left,
    rgba(242, 238, 238, 0.5),
    rgba(63, 60, 59, 0.5)
  );
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > .card {
    background: ${colors.white};
    width: 50%;
    height: 90%;
    border-radius: 5px;
    > .product-image {
      background: url(${panCuadrado});
      border-radius: 5px;
      width: 100%;
      height: 55%;
    }
    > .product-description {
      width: 100%;
      height: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .product-price {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > span {
          color: ${colors.letters};
          font-size: 2em;
          font-family: 'KaushanScript-Regular';
        }
        > .description {
          color: ${colors.letters};
          font-size: 1.2em;
          font-family: 'KaushanScript-Regular';
        }
        > .price {
          font-size: 2.2em;
          font-family: 'Oswald-Regular';
          margin-top: 1em;
        }
      }
    }
  }
`;
