import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Sections from '~/src/commons/sections';

const Home = () => (
  <>
    <ReactPageScroller pageOnChange={() => {}} customPageNumber={() => {}}>
      <Sections>Portada</Sections>
      <Sections>Galeria</Sections>
      <Sections>Productos</Sections>
      <Sections>Contacto</Sections>
    </ReactPageScroller>
  </>
);

export default Home;
