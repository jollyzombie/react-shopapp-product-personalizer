import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = (props) => {
  Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    baseSize: PropTypes.number.isRequired,
  };

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const prepareColorName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = (price) => {
    return setCurrentPrice(props.basePrice + price);
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log(
      `Summary
        =======
        name: ${props.title}
        price: ${currentPrice}
        size: ${currentSize.name}
        color: ${currentColor}`
    );
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: ${currentPrice}</span>
        </header>
        <form>
          {/* SIZES */}
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type='button'
                    className={clsx(size.name === currentSize.name && styles.active)}
                    onClick={() =>
                      setCurrentSize({
                        name: size.name,
                        price: getPrice(size.additionalPrice),
                      })
                    }
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLORS */}
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (
                <li key={item}>
                  <button
                    type='button'
                    className={clsx(prepareColorName(item), item === currentColor && styles.active)}
                    onClick={() => setCurrentColor(item)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button} onClick={handleClick}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
