import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { MdClose } from 'react-icons/md'
import { addQuantity, deleteBasket, deleteQuantity } from '../../redux/basket'
import bag from '../../images/shoppingbag.svg'
import styles from './basket.module.scss'

function Basket({ showBasket, setShowBasket }) {
  const basket = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  const items = Object.values(basket)
  const checkBasket = items.length === 0
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className={showBasket ? classNames(styles.basket, styles.active) : styles.basket}>
      <div className={styles.basket__top}>
        <h2 className={styles.basket__title}>Your Products</h2>
        <button className={styles.basket__close} onClick={() => setShowBasket(!showBasket)}>
          <MdClose />
        </button>
      </div>
      {
        checkBasket ? (
          <div className={styles.basket__empty}>
            <div className={styles.basket__empty_box}>
              <img src={bag} alt="shopping bag" className={styles.basket__empty_img} />
              <p className={styles.basket__empty_title}>Your basket is empty</p>
              <p className={styles.basket__empty_text}>The items you order will appear here.</p>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.basket__box}>
              {items.map((item) => (
                <div key={item.id} className={styles.basket__item}>
                  <div className={styles.basket__left}>
                    <button className={styles.basket__cancel} onClick={() => dispatch(deleteBasket(item.id))}><MdClose /></button>
                    <img src={item.thumbnail} alt={item.title} className={styles.basket__image} />
                    <div className={styles.basket__info}>
                      <h3 className={styles.basket__name}>{item.title}</h3>
                      <p className={styles.basket__brand}>Brand: {item.brand}</p>
                    </div>
                  </div>
                  <div className={styles.basket__right}>
                    <p className={styles.basket__price}><span>{item.price}</span> $</p>
                    <div className={styles.basket__amount}>
                      <button className={styles.basket__minus} onClick={() => dispatch(deleteQuantity(item.id))}>-</button>
                      <p className={styles.basket__num}>{item.quantity}</p>
                      <button className={styles.basket__plus} onClick={() => dispatch(addQuantity(item.id))}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.basket__order}>Minimum order amount <span>400</span> грн</p>
            <div className={styles.basket__footer}>
              <div className={styles.basket__total}>
                <p className={styles.basket__total_text}>Total:</p>
                <p className={styles.basket__total_price}><span>{totalPrice}</span>$</p>
              </div>
              <button className={styles.basket__order_btn} onClick={()=>alert('Ajoyib Tanlov')}>Checkout</button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Basket