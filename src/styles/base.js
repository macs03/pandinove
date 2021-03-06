import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const BaseStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    body {
        font-family: 'Open Sans';
        background-color: ${colors.white};
        height: 100vh;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    ol,
    ul {
        list-style: none;
    }
    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
    }
    button,
    input,
    select,
    textarea {
        margin: 0;
    }
    img,
    video {
        height: auto;
        max-width: 100%;
    }
    iframe {
        border: 0;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    td,
    th {
        padding: 0;
    }
`;

export default BaseStyles;
