import { useState, createContext } from 'react'

export const OrderContext = createContext()

export function OrderProvider ({ children }) {
  const [order, setOrder] = useState(window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : [])
  const orderLength = order.length

  return (
    <OrderContext.Provider value={{
      order,
      setOrder,
      orderLength
    }}
    >{children}
    </OrderContext.Provider>
  )
}
