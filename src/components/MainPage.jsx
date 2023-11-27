import { Hero } from './Hero.jsx'
import { History } from './History.jsx'
import { Carousel } from './Carousel.jsx'
import { CommentsSection } from './CommentsSection.jsx'
import { Reservation } from './Reservation.jsx'
import './MainPage.css'
import { useEffect } from 'react'

export function MainPage () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Hero />
      <History />
      <Carousel />
      <CommentsSection />
      <Reservation />
      <img
        className='wpp-logo'
        src='https://static.vecteezy.com/system/resources/previews/023/986/631/original/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png'
        alt=''
      />
    </>
  )
}
