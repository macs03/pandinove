import styled from 'styled-components';
import colors from '~/src/styles/colors';

const Button = styled.button`
  background: ${colors.letters};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-style: none;
  border-color: transparent;
  border-image: none;
  padding: 1em;
  > span {
    color: ${colors.secondary};
    font-size: 1.5em;
    text-decoration: none;
    font-family: 'Oswald-Regular';
  }
`;

export default Button;
