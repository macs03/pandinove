import styled from 'styled-components';
import colors from '~/src/styles/colors';

export const Title = styled.h1`
  color: ${colors.white};
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
  color: ${colors.white};
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'KaushanScript-Regular';
  font-size: 2.4em;

  @media only screen and (min-width: 500px) {
    font-size: 5em;
  }
`;

export const SectionTitle = styled.h3`
  color: ${props => (props.primary ? colors.letters : colors.secondary)};
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'KaushanScript-Regular';
  font-size: 1.4em;
  position: absolute;
  top: 25px;
  left: 20px;
  @media only screen and (min-width: 500px) {
    font-size: 2.5em;
  }
`;

export const SmallTitle = styled.h4`
  color: ${props => (props.primary ? colors.letters : colors.white)};
  text-align: center;
  padding: 0;
  margin: 0;
  font-family: 'KaushanScript-Regular';
`;
