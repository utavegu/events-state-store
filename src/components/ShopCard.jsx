import React from 'react'
import PropTypes from 'prop-types'
import styles from './ShopCard.module.css'

function ShopCard(props) {
  const {cards} = props;

  return (
    <div className = {styles.shopCard}>
      <img src={cards.img} alt={`Изображение ${cards.name} не загрузилось`}/>
      <div className = {styles.shopCard__wrapper}>
        <h2>{cards.name}</h2>
        <span>{cards.color}</span>
        <div className = {styles.shopCard__footer}>
          <span>${cards.price}</span>
          <a href="">Add to cart</a>
        </div>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
}

export default ShopCard
