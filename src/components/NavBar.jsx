import { useState, useEffect, useContext } from 'react'
import { CartIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Order } from './Order.jsx'
import { OrderContext } from '../context/OrderContext.jsx'

export function NavBar () {
  const [orderShow, setOrderShow] = useState(false)
  const { orderLength } = useContext(OrderContext)

  const handleClick = () => {
    setOrderShow(!orderShow)
  }

  useEffect(() => {
    const orderBox = document.querySelector('.order-box')

    if (orderShow && orderBox) {
      orderBox.classList.add('show')
      document.body.style.overflowY = 'hidden'
    } else if (orderBox) {
      orderBox.classList.remove('show')
      document.body.style.overflowY = 'auto'
    }
    return () => {
      document.body.style.overflowY = 'auto'
      if (orderBox) {
        orderBox.classList.remove('show')
      }
    }
  }, [orderShow])

  return (
    <>
      <nav>
        <Link to='/'>
          <h2 onClick={() => setOrderShow(false)}>Huron Artesanal</h2>
        </Link>
        <div className='cart'>
          <Link to='/menu'>
            <button className='nav-menu-btn'>Menu Online</button>
          </Link>
          <button className='cart-button' onClick={handleClick}>
            <CartIcon />
            {orderLength > 0 && <p className='order-count'>{orderLength}</p>}
          </button>
        </div>
      </nav>
      <Order setOrderShow={setOrderShow} />
    </>
  )
}
