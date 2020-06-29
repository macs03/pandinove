import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Container, ProductCard } from './products.styled';
import { AssetsContainer } from '~/src/components/gallery/gallery.styled';
import { SectionTitle } from '~/src/commons/title';

const PRODUCTS = [
  {
    name: 'Pastel del pollo',
    description: 'Pasteles congelados rellenos de pollo, minimo 4 por sabor',
    price: '1.49'
  },
  {
    name: 'Cachitos',
    description: 'Cachitos precocidos rellenos de jamon y tocineta',
    price: '2.99'
  },
  {
    name: 'Pan de queso',
    description: 'Pan andino relleno de queso paisa',
    price: '4.99'
  },
  {
    name: 'Albinitas',
    description: 'Bolitas de pan de leche por paquetes de 6',
    price: '5.99'
  }
];

const Products = () => {
  const renderProduct = product => (
    <ProductCard>
      <div className="card">
        <div className="product-image" />
        <div className="product-description">
          <div className="product-price">
            <span>{product.name}</span>
            <span className="description">{product.description}</span>
            <span className="price">{`${product.price}$`}</span>
          </div>
          {/* contador */}
        </div>
      </div>
    </ProductCard>
  );

  return (
    <Container>
      <SectionTitle>Nuestros productos</SectionTitle>
      <AssetsContainer>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          swipeable={false}
        >
          {PRODUCTS.map(product => renderProduct(product))}
        </Carousel>
      </AssetsContainer>
    </Container>
  );
};

export default Products;
