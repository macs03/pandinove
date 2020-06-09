import { createGlobalStyle } from 'styled-components';

import KaushanScript from '~/src/assets/fonts/KaushanScript-Regular.ttf';
import Oswald from '~/src/assets/fonts/Oswald-Regular.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'KaushanScript-Regular';
        src: url(${KaushanScript}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Oswald-Regular';
        src: url(${Oswald}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalFonts;
