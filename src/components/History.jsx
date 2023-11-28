import './History.css'

export function History () {
  return (
    <div className='history'>
      <article>
        <h2 className='objetive-title'>Nuestra historia y objetivo</h2>
        <p>
          Fundada en 1742 por Sir Patrick Clowning, la hamburgeseria El Huron ha estado siempre un paso adelante en estandares de calidad, destacandose asi sobre otras empresas multinacionales que ofrecen poductos similares.
        </p>
        <p>
          <strong>Por que “El Huron”? </strong>
          El Sr. Clowning empezo el negocio en la esquina de su casa vendiendo hamburguesas caseras preparadas por la mañana, el aroma que desprendian las gotas de grasa cuando impactaban los carbones de pino irlandes fue irresistible para un pequeño huron huerfano que merodeaba la zona, Clowning decidio alimentar al pequeño mamifero con
          una de sus hamburguesas y desde entonces fue su mas leal compañero.
          Años despues cuando el pequeño huron apodado como Peepo por los comensales que acudian a degustar los platos del Sr Clowning en su ahora local mas famoso de la ciudad fallecio, decidio renombrar su futura franquicia en honor a su compañero.
        </p>
        <p>
          <strong>Nuestro objetivo:</strong>
          En honor al fallecido Sir Patrick Clowning nuestro objetivo siempre ha sido y sera brindar las mejores hamburguesas. Todos los productos que usamos para la elaboracion de nuestros platos son frescos y premium.
        </p>
        <p>
          Los esperamos en cualquiera de nuestros locales o tambien podes disfrutar en la comodidad de tu casa!
        </p>
      </article>
      <div className='article-images'>
        <img src='https://res.cloudinary.com/dprq4hntt/image/upload/ar_16:9,c_scale,w_600/huronArtesanal/lcoav7m8fmjscgzlycve.jpg' alt='Foto promocional antigua' />
        <img src='https://res.cloudinary.com/dprq4hntt/image/upload/ar_16:9,c_scale,w_600/huronArtesanal/sn2xnyhbhiclam4toa73.jpg' alt='Hamburguesas' />
        <img src='https://res.cloudinary.com/dprq4hntt/image/upload/v1701062448/huronArtesanal/a5g9jtgmpwihptg4xqpx.jpg' alt='Dibujo de un huron chef' />
      </div>
    </div>
  )
}
