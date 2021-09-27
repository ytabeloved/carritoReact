import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

const Carousell = () => {
return (
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.freeimages.com/images/large-previews/8d8/crystal-1493421.jpg"
      alt="Este proyecto"
    />
    <Carousel.Caption>
      <h5>Este proyecto</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.freeimages.com/images/large-previews/f68/crystal-prisms-1181116.jpg"
      alt="me esta"
    />
    <Carousel.Caption>
      <h5>me esta</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.freeimages.com/images/large-previews/597/pinkquartz-pebbles-3-1385737.jpg"
      alt="volviendo loca"
    />
    <Carousel.Caption>
      <h5>volviendo loca</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}

export default Carousell