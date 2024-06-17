import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Recomendaciones() {
  return (
    <div className='bodyRecomendaciones'>
       <Card style={{ width: '15rem',background: 'black',color:'white',margin:'5px 45px'}}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/S/pv-target-images/532d5911abcd79c25d1a01dba9c343252b395ae64417427532113961691317b1.jpg" />
      <Card.Body>
        <Card.Title>¿Qué pasó ayer?</Card.Title>
        <Card.Text>
        Doug y sus amigos van a Las Vegas para celebrar su despedida de soltero, pero al día siguiente no recuerdan nada y no hay rastro del novio. 
        </Card.Text>
        <Button variant="primary">Trailer</Button>
      </Card.Body>
    </Card>
    
      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'5px 45px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOPHfal50BIKkAubFdK57t1qu1orbsxXcbQ&s" />
        <Card.Body>
          <Card.Title>¿Qué Pasó Ayer? Parte 2</Card.Title>
          <Card.Text>
          Doug, Phil y Alan viajan a la exótica Tailandia para la boda de Stu. Pero después de una noche de cervezas, todo se pondrá de cabeza.
          </Card.Text>
          <Button variant="primary">Trailer</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'5px 45px'}}>
        <Card.Img variant="top" src="https://www.tematika.com/media/catalog/Ilhsa/Imagenes/577403.jpg" />
        <Card.Body>
          <Card.Title>¿Qué pasó ayer? Parte 3</Card.Title>
          <Card.Text>
          Doug es secuestrado por un brutal mafioso, quien exige a los chicos encontrar a Leslie Chow si quieren volver a ver a su amigo con vida.
          </Card.Text>
          <Button variant="primary">Trailer</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'5px 45px'}}>
        <Card.Img variant="top" src="https://es.web.img3.acsta.net/medias/nmedia/18/89/17/40/20034266.jpg" />
        <Card.Body>
          <Card.Title>Proyecto X</Card.Title>
          <Card.Text>
          Proyecto X” sigue a 3 desconocidos de escuela secundaria que finalmente serán famosos.
          </Card.Text>
          <Button variant="primary">Trailer</Button>
        </Card.Body>
      </Card> 

      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'25px 45px' }}>
        <Card.Img variant="top" src="https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg" />
        <Card.Body>
          <Card.Title>Breaking Bad</Card.Title>
          <Card.Text>
          El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor. Su salario apenas le alcanza para sostener a su familia...
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'25px 45px' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" />
        <Card.Body>
          <Card.Title>Juego de tronos</Card.Title>
          <Card.Text>
          Quien se sienta en el Trono de Hierro, controla los Siete Reinos. Basada en la saga de libros de George R.R. Martin...
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'25px 45px' }}>
        <Card.Img variant="top" src="https://es.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52" />
        <Card.Body>
          <Card.Title>The Boys</Card.Title>
          <Card.Text>
          Una batalla entre las personas corrientes y los superhéroes tiene lugar cuando estos últimos deciden desvelar la verdad sobre una corporación ...
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem',background: 'black',color:'white',margin:'25px 45px' }}>
        <Card.Img variant="top" src="https://images.justwatch.com/poster/304859976/s332/temporada-2" />
        <Card.Body>
          <Card.Title>Malcolm in the Middle</Card.Title>
          <Card.Text>
          Sitcom familiar que aborda los divertidos problemas y situaciones de una familia de clase media en la que el hijo Malcolm parece...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

