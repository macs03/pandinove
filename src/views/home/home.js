import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Sections from '~/src/commons/sections';
import Cover from '~/src/components/cover/cover';
import { PagerContain, PagerItem } from '~/src/commons/pager';

const Home = () => {
  const pages = [0, 1, 2, 3];
  const [currentPage, setcurrentPage] = useState(null);

  const handlePageChange = number => {
    setcurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };

  const isActive = page => page === currentPage;

  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <Sections>
          <Cover />
        </Sections>
        <Sections>Galeria</Sections>
        <Sections>Productos</Sections>
        <Sections>Contacto</Sections>
      </ReactPageScroller>
      <PagerContain>
        {pages.map(page => (
          <PagerItem
            onClick={() => handlePageChange(page)}
            isActive={isActive(page)}
          />
        ))}
      </PagerContain>
    </>
  );
};

export default Home;
