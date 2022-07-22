import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [additionalPrice, setAdditionalPrice] = useState('');


  const getPrice = (price) => setAdditionalPrice(price);


  const calculatedPrice = useMemo(() => props.basePrice + additionalPrice,
   [props.basePrice, additionalPrice]);

  const handleClick = (props) => {
    return console.log(
      `++++++++Summary
        =======
        name: ${props.title}
        price: ${calculatedPrice}
        size: ${currentSize}
        color: ${currentColor}`
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {calculatedPrice}$</span>
        </header>
        <ProductForm
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          sizes={props.sizes}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          color={props.colors}
          handleClick={handleClick}
          title={props.title}
          setCurrentPrice={calculatedPrice}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
};


export default Product;
