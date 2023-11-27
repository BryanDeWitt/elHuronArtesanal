import { useContext, useEffect } from 'react'
import { OrderContext } from '../context/OrderContext.jsx'

export function Modal ({ actualDish, modal, onClick }) {
  const { setOrder, order } = useContext(OrderContext)

  useEffect(() => {
    const modalDiv = document.querySelector('.modal')
    const dishModalDiv = document.querySelector('.dish-modal')

    if (modalDiv && dishModalDiv) {
      modalDiv.classList.toggle('show', modal)
      dishModalDiv.classList.toggle('show', modal)
    }

    if (modal) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [modal])

  const handleOrder = (dish) => {
    const isInList = order.some(item => item.name === dish.name)

    if (isInList) {
      setOrder(previousState => {
        return previousState.map(item => {
          if (item.name === dish.name) {
            return {
              ...item,
              quantity: item.quantity++
            }
          }
          return item
        })
      })
    } else {
      const newDish = {
        ...dish,
        quantity: 1
      }

      const newOrder = [...order, newDish]
      setOrder(newOrder)
      window.localStorage.setItem('order', JSON.stringify(newOrder))
    }
  }

  return (
    <div className={`modal ${modal ? 'show' : ''}`}>
      <div className={`dish-modal ${modal ? 'show' : ''}`}>
        <button className='close-button' onClick={() => onClick()}>
          &#x2716;
        </button>
        <h2 style={{ color: 'black' }}>{actualDish.name}</h2>
        <img
          src={actualDish.image}
          alt=''
        />
        <p>{actualDish.description}</p>
        <p>Precio: {actualDish.price}</p>
        {
          order.some(item => item.name === actualDish.name) ? <h4>Agregado al pedido</h4> : null
        }
        <button className='add-to-cart' onClick={() => handleOrder(actualDish)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
