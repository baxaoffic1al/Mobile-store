import classNames from 'classnames'
import notfound from '../../images/notfound.png'
import styles from '../pages.module.scss'

function NotFound() {
    return (
        <div className={classNames(styles.notfound, 'container')}>
            <div className={styles.notfound__box}>
                <img src={notfound} alt="error" className={styles.notfound__image} />
                <h2 className={styles.notfound__title}>Ошибка 404.Что-то пошло не так.</h2>
                <p className={styles.notfound__text}> Страница, которую вы ищите, временноне доступна или ее еже нет</p>
                <button className={styles.notfound__btn}>Вернуться на главную</button>
            </div>
        </div>
    )
}

export default NotFound