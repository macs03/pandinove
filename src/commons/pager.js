import styled, { css, keyframes } from 'styled-components';
import colors from '~/src/styles/colors';

const Pulse = keyframes`
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

export const PagerContain = styled.div`
  position: fixed;
  width: 40px;
  height: 100%;
  top: 0;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PagerItem = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background: ${colors.letters};
  margin: 20px 0;
  ${props => {
    if (props.isActive) {
      return css`
        background: ${colors.secondary};
      `;
    }
  }}
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: ${Pulse} 2s infinite;
`;
