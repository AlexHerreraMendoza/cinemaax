import React from 'react'
import ReactPlayer from 'react-player'
export default function Pedidos() {
    const videoprueba='https://youtu.be/UzFZR2dRsSY?si=VjutnAZVpeEVuT-d'
  return (
    <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Escriba la pelicula que desea buscar</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div style={{alignItems:'center'}}>
        <ReactPlayer style={{margin:'0px auto'}}
            url={videoprueba} //Nos sirve para llamar a la URL
            playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
            volume={0.8}  //Es para poner el volumen por defecto en este caso al 50%
            controls      //Para que aparezcan los controles de pausa y volumen
            width='50%'
            height='280px'
        />
    </div>

</div>
  )
}
