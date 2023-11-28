import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './EmblaCarousel.css'

export function EmblaCarousel () {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const slides = [
    'https://res.cloudinary.com/dprq4hntt/image/upload/v1701059839/huronArtesanal/vcmuwobnl1idb4w6evcy.jpg',
    'https://res.cloudinary.com/dprq4hntt/image/upload/v1701060039/huronArtesanal/odawobqigxdg2tvbkmwn.jpg',
    'https://res.cloudinary.com/dprq4hntt/image/upload/v1701059508/huronArtesanal/ab22ysz3hxig7ftmpp5b.jpg',
    'https://res.cloudinary.com/dprq4hntt/image/upload/v1701058864/huronArtesanal/by59n9ahmgwreva33so0.jpg'
  ]

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {
          slides.map((slide, index) => (
            <div className='embla__slide' key={index}>
              <img src={slide} alt='Fotos' />
            </div>
          ))
          }
      </div>
    </div>
  )
}
