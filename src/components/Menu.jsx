import './Menu.css'
import dishesJson from '../../mockRecetas.json'
import { useState, useEffect } from 'react'
import { Modal } from './Modal.jsx'

export function Menu () {
  const [category, setCategory] = useState('all')
  const [actualDish, setActualDish] = useState({})
  const [modal, setModal] = useState(false)

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  const dishesCategories = Object.keys(dishesJson)
  const dishes = category === 'all' ? Object.values(dishesJson).flat() : dishesJson[category]

  const handleDish = (dish) => {
    setActualDish(dish)
    setModal(true)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Modal actualDish={actualDish} modal={modal} onClick={() => setModal(false)} />
      <div className='menu-image' />
      <h2 className='current-category'>{category === 'all' ? 'Todos' : capitalize(category)}</h2>
      <div className='menu-container'>
        <div className='menu-categories'>
          <div>
            <button className='menu-category' onClick={() => setCategory('all')}>
              Todos
            </button>
            {dishesCategories.map((category) => (
              <button key={category} className='menu-category' onClick={() => setCategory(category)}>
                {capitalize(category)}
              </button>
            ))}
          </div>
        </div>
        <div className='menu-dishes'>
          {dishes.map((dish, index) => (
            <div key={index} className='dish-item' onClick={() => handleDish(dish)}>
              <img
                src={dish.image}
                alt=''
              />
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <p>Precio: {dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
