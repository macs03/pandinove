import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Sections from '~/src/commons/sections';
import Cover from '~/src/components/cover/cover';

const Home = () => (
  <>
    <ReactPageScroller pageOnChange={() => {}} customPageNumber={() => {}}>
      <Sections>
        <Cover />
      </Sections>
      <Sections>Galeria</Sections>
      <Sections>Productos</Sections>
      <Sections>Contacto</Sections>
    </ReactPageScroller>
  </>
);

export default Home;
