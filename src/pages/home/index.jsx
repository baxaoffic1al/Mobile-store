import { useNavigate } from 'react-router-dom'
import Filter from '../../components/filter'
import Loader from '../../components/loader'
import useData from '../../hooks/useData'
import styles from '../pages.module.scss'
import Card from '../../components/card'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const basket = useSelector(state => state.basket)
  const navigate = useNavigate()
  const [data, loading, error] = useData('/products')
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(data?.products);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProducts?.length / 20);
  const startIndex = (currentPage - 1) * 20;
  const endIndex = startIndex + 20;
  const currentItems = filteredProducts?.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(()=>{
    setProducts(data?.products)
    setFilteredProducts(data?.products)
  },[data])
  if (loading || !data) {
    return <Loader />
  }
  if (error) {
    return navigate('/notfound')
  }
  return (
    <section className={styles.home}>
      <div className="container">
        <Filter products={products} setFilteredProducts={setFilteredProducts} />
        <div className={styles.home__products}>
          {currentItems?.map((product) => (
            <Card key={product.id} product={product} selected={product.id in basket} />
          ))}
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pagination__prev}
          >
            Previous
          </button >
          <span className={styles.pagination__info}>
            Page {currentPage} of {totalPages}
          </span >
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pagination__next}
          >
            Next
          </button >
        </div >
      </div>
    </section>
  )
}

export default Home