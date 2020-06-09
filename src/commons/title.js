import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'KaushanScript-Regular';
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MediumTitle = styled.h2`
  color: white;
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'KaushanScript-Regular';
  font-size: 2.4em;

  @media only screen and (min-width: 500px) {
    font-size: 5em;
  }
`;

export const SmallTitle = styled.h3`
  color: white;
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'KaushanScript-Regular';
`;
