import { EmblaCarousel } from './EmblaCarousel.jsx'
import './Carousel.css'
import { Link } from 'react-router-dom'

export function Carousel () {
  return (
    <div className='carousel-container'>
      <EmblaCarousel />
      <div className='carousel-content'>
        <h2>Visita nuestro menu</h2>
        <Link to='/menu'><button className='carousel-btn'>Aqui</button></Link>
      </div>
    </div>
  )
}
