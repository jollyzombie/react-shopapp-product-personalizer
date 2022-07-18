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
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
  getPrice: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductForm;
