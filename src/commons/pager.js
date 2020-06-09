import styled, { css } from 'styled-components';

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
  background: gray;
  margin: 20px 0;
  ${props => {
    if (props.isActive) {
      return css`
        background: red;
      `;
    }
  }}
`;
