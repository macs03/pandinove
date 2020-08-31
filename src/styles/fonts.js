import { createGlobalStyle } from 'styled-components';

import Oswald from '~/src/assets/fonts/Oswald-Regular.ttf';
import HeyAugust from '~/src/assets/fonts/Hey-August.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Oswald-Regular';
        src: url(${Oswald}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Hey-August';
        src: url(${HeyAugust}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalFonts;
