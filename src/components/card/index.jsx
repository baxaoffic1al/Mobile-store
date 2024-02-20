import { useDispatch } from 'react-redux'
import { HiOutlineCheck, HiOutlinePlus } from 'react-icons/hi'
import { addBasket, deleteBasket } from '../../redux/basket'
import styles from './card.module.scss'

function Card({ product, selected }) {
  const dispatch = useDispatch()
  const { images, title, price } = product
  const [image] = images
  const handleSelect = () => {
    selected ? dispatch(deleteBasket(product.id)) : dispatch(addBasket(product))
  }
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.title} className={styles.card__image} />
      <div className={styles.card__box}>
        <p className={styles.card__title}>{product.title}</p>
        <div className={styles.card__bottom}>
          <p className={styles.card__price}><span>{product.price} </span>$</p>
          <button className={styles.card__btn} onClick={handleSelect}>
            {selected ? <HiOutlineCheck /> : <HiOutlinePlus />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card