import './CommentsSection.css'
import comments from '../../mockComentarios.json'
import { useEffect, useState } from 'react'
import { LeftArrow, RightArrow } from './Icons'

export function CommentsSection () {
  const [currentComment, setCurrentComment] = useState(0)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentComment(prevState => prevState === comments.comments.length - 1 ? 0 : prevState + 1)
    }, 4000)
    return () => clearTimeout(timeOut)
  }, [currentComment])

  useEffect(() => {
    const slides = document.querySelectorAll('.comment-container')
    const totalSlides = slides.length

    slides.forEach(slide => slide.classList.remove('prev', 'next', 'active'))

    if (currentComment === 0) {
      slides[currentComment].classList.add('active')
      slides[currentComment + 1].classList.add('next')
    } else if (currentComment > 0 && currentComment < totalSlides - 1) {
      slides[currentComment - 1].classList.add('prev')
      slides[currentComment].classList.add('active')
      slides[currentComment + 1].classList.add('next')
    } else if (currentComment === totalSlides - 1) {
      slides[currentComment - 1].classList.add('prev')
      slides[currentComment].classList.add('active')
    }
  }, [currentComment])

  const commentsArray = comments.comments
  return (
    <div className='comment-section-container'>
      <div className='prize-section'>
        <div className='prize-info'>
          <h3>Carrito “El Huron” gana 3 estrellas Michellin, convirtiendose en el primer local de comida rapida con este reconocimiento.</h3>
          <img src='https://http2.mlstatic.com/D_NQ_NP_973921-MLU70444871217_072023-O.webp' alt='Carrito del Huron cuando gano las estrellas Michellin' />
        </div>
      </div>

      <div className='comment-section'>
        <div className='left-arrow' onClick={() => setCurrentComment(prevState => prevState === 0 ? commentsArray.length - 1 : prevState - 1)}>
          <LeftArrow />
        </div>
        {
          commentsArray.map((comment, index) => (
            <article className='comment-container' key={index}>
              <img src={comment.avatar} alt={'Foto de ' + comment.name} />
              <span className='comment-name'>{comment.name}</span>
              <div className='comment-info'>
                <span><em>"{comment.comment}"</em></span>
                <span>⭐{comment.stars}</span>
              </div>
            </article>
          ))
        }
        <div className='right-arrow' onClick={() => setCurrentComment(prevState => prevState === commentsArray.length - 1 ? 0 : prevState + 1)}>
          <RightArrow />
        </div>
      </div>
    </div>
  )
}
