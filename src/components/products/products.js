import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Container, ProductCard } from './products.styled';
import { AssetsContainer } from '~/src/components/gallery/gallery.styled';
import { SectionTitle } from '~/src/commons/title';

const Products = () => (
  <Container>
    <SectionTitle>Nuestros productos</SectionTitle>
    <AssetsContainer>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        swipeable={false}
      >
        <ProductCard>
          <div className="card">
            <div className="product-image" />
            <div className="product-description">
              <div className="product-price">
                <span>Pan de queso</span>
                <span>Pan andino relleno de queso paisa</span>
                <span className="price">9.99$</span>
              </div>
              {/* contador */}
            </div>
          </div>
        </ProductCard>
      </Carousel>
    </AssetsContainer>
  </Container>
);

export default Products;
