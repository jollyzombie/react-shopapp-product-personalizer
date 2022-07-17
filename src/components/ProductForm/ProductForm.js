import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form>
      <OptionSize
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        getPrice={props.getPrice}
        sizes={props.sizes}
      />

      <OptionColor
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
        color={props.color} />

      <Button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          props.handleClick(props);
        }}
      >
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  color: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm;
