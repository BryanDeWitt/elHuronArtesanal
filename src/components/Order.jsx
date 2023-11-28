import { useContext, useState } from 'react'
import './Order.css'
import { OrderContext } from '../context/OrderContext'
import { DeleteIcon } from './Icons.jsx'
import { useNavigate } from 'react-router-dom'

export function Order ({ setOrderShow }) {
  const { order, setOrder } = useContext(OrderContext)
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [isOrder, setIsOrder] = useState(false)
  const navigate = useNavigate()

  const handleCheck = () => {
    if (order.length > 0) {
      setCheck(true)
      setLoading(true)
      setIsOrder(true)
      setOrder([])
      window.localStorage.removeItem('order')
      setLoadingMessage('Recibiendo tu pedido...')
      setTimeout(() => {
        setLoadingMessage('Calentando la plancha...')
      }, 2000)
      setTimeout(() => {
        setLoadingMessage('Preparando los condimentos...')
      }, 4000)
      setTimeout(() => {
        setLoadingMessage('Asegurando la calidad...')
      }, 6000)
      setTimeout(() => {
        setLoading(false)
        setLoadingMessage('Pedido Realizado!')
      }, 8000)
    } else {
      setCheck(true)
      setLoadingMessage('No tienes productos en el carrito :(')
    }
  }

  const handleBuyAgain = () => {
    setCheck(false)
    setOrderShow(false)
    setIsOrder(false)
    navigate('/menu')
  }

  const handleClick = () => {
    setOrderShow(false)
  }

  const handleClean = () => {
    window.localStorage.removeItem('order')
    setOrder([])
  }

  const handleAdd = (index) => {
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder]
      updatedOrder[index].quantity++
      window.localStorage.setItem('order', JSON.stringify(updatedOrder))
      return updatedOrder
    })
  }

  const handleRemove = (index) => {
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder]

      if (updatedOrder[index].quantity > 0) {
        updatedOrder[index].quantity--
      }
      if (updatedOrder[index].quantity === 0) {
        updatedOrder[index].quantity = 1
      }
      window.localStorage.setItem('order', JSON.stringify(updatedOrder))

      return updatedOrder
    })
  }

  const handleDeleteBtn = (index) => {
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder]
      updatedOrder.splice(index, 1)
      window.localStorage.setItem('order', JSON.stringify(updatedOrder))
      return updatedOrder
    })
  }

  if (loading === true) {
    return (
      <div className='order-box' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='custom-spinner' />
        <h1>{loadingMessage}</h1>
      </div>
    )
  }

  if (check && loading === false) {
    return (
      <div className='order-box' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '15px' }}>{loadingMessage}</h1>
        <button onClick={handleBuyAgain} className='make-order-btn'>{isOrder ? 'Volver a comprar' : 'Comprar'}</button>
      </div>
    )
  }

  return (
    <div className='order-box'>
      <div className='dish-container'>
        <div className='order-close-btn-container'>
          <h1>Orden</h1>
          <button className='order-close-btn' onClick={handleClick}>&#x2716;</button>
        </div>
        {order.map((item, index) => (
          <div className='dish' key={index}>
            <h4 className='item-name'>{item.name}</h4>
            <p className='quantity'>Cantidad:</p>
            <div className='quantity-btn-container'>
              <button className='qnt-btn' onClick={() => handleRemove(index)}>-</button>
              <p>{item.quantity}</p>
              <button className='qnt-btn' onClick={() => handleAdd(index)}>+</button>
            </div>
            <button
              onClick={() => handleDeleteBtn(index)}
              className='qnt-btn delete-btn'
            >
              <DeleteIcon />
            </button>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ marginLeft: '20px' }}>PrecioTotal:</span>
          <h3 style={{ color: 'lightgreen' }}>${order.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          <button className='clean-btn' onClick={handleClean}>Limpiar Carrito</button>
          <button className='make-order-btn' onClick={handleCheck}>Hacer Pedido</button>
        </div>
      </div>
    </div>
  )
}
