import React, { useState, useEffect } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Sections from '~/src/commons/sections';
import Cover from '~/src/components/cover/cover';
import Products from '~/src/components/products/products';
import Gallery from '~/src/components/gallery/gallery';
import Contact from '~/src/components/contact/contact';
import { PagerContain, PagerItem } from '~/src/commons/pager';

const Home = () => {
  const pages = [0, 1, 2, 3];
  const [currentPage, setcurrentPage] = useState(null);

  const handlePageChange = number => {
    setcurrentPage(number); // set currentPage number, to reset it from the previous selected.
  };

  useEffect(() => {
    if (window.location.pathname === '/products') {
      handlePageChange(2);
    }
  });

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
        <Sections>
          <Gallery />
        </Sections>
        <Sections>
          <Products />
        </Sections>
        <Sections>
          <Contact />
        </Sections>
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
