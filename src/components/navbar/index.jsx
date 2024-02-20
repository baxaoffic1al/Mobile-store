import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsBasket } from 'react-icons/bs'
import Basket from '../basket'
import styles from './navbar.module.scss'
import logo from '../../images/logo.png'

function Navbar() {
  const basket = useSelector(state => state.basket)
  const [showBasket, setShowBasket] = useState(false)
  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.header__container)}>
        <nav className={styles.header__nav}>
          <Link to='/' className={styles.header__logo}><img src={logo} alt="" /></Link>
          <button className={styles.header__basket} onClick={()=>setShowBasket(true)}>
            {Object.keys(basket).length > 0 && <span>{Object.keys(basket).length}</span>}
            <BsBasket />
          </button>
        </nav>
        <Basket showBasket={showBasket} setShowBasket={setShowBasket} />
      </div>
      <div className={showBasket ? styles.block : ''}></div>
    </header>
  )
}

export default Navbar