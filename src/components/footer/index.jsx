import { Link } from 'react-router-dom'
import { FaTelegramPlane,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare, FaRegHeart } from 'react-icons/fa'
import styles from './footer.module.scss'
import classNames from 'classnames'
import logo from '../../images/logo.png'

function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className={classNames('container',styles.footer)}>
      <Link to='/' className={styles.footer__logo}><img src={logo} alt="" /></Link>
      <p className={styles.footer__date}>&copy; Made with <FaRegHeart /> by Baxaa {date}</p>
      <div className={styles.footer__social}>
        <Link to='https://t.me/baxaa79' target='_blank'><FaTelegramPlane /></Link>
        <Link to='https://www.facebook.com/' target='_blank'><FaFacebookSquare /></Link>
        <Link to='https://www.instagram.com/79baxaaa/' target='_blank'><FaInstagramSquare /></Link>
      </div>
    </footer>
  )
}

export default Footer