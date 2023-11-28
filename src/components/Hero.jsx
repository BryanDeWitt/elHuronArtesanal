import './Hero.css'

export function Hero () {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div>
          <h1>El Huron Artesanal</h1>
          <h2>Productos de la mayor calidad desde 1742</h2>
        </div>
        <p>Desde hace mas de 250 años, nos hemos comprometido a entregar la mayor calidad en nuestros locales. Empezando como un pequeño negocio hemos logrado expandirnos por mas de 3 continentes y 43 paises!</p>
      </div>
      <video src='https://res.cloudinary.com/dprq4hntt/video/upload/v1701062090/huronArtesanal/eksbimuujns5ynyc7dfn.mp4' autoPlay loop muted alt='Video promocional del Restaurante' />
    </div>
  )
}
