import React from 'react'
import PropTypes from 'prop-types'
import styles from './ShopItem.module.css'

function ShopItem(props) {
  const {items} = props;

  return (
    <div className = {styles.shopItem}>
      <img src={items.img} alt={`Изображение ${items.name} не загрузилось`}/>
      <h2>{items.name}</h2>
      <span className = {styles.shopItem__color}>{items.color}</span>
      <span className = {styles.shopItem__price}>${items.price}</span>
      <a href="">Add to cart</a>
    </div>
  )
}

ShopItem.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
}

export default ShopItem
