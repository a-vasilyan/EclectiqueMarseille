import "../style/carousel.css";
import "../style/media.css";
import Carousel from 'react-bootstrap/Carousel';
import item1 from "../image/carouselitem1.jpg";
import item2 from "../image/carouselitem2.jpg";
import item3 from "../image/carouselitem3.jpg";
import item4 from "../image/carouselitem4.jpg";
import item5 from "../image/carouselitem5.jpg";
import item6 from "../image/carouselitem6.jpg";

function UncontrolledExample() {

  const images = [item1, item2, item3, item4, item5, item6];
  
  return (
    <Carousel>
      {
        images.map((v, i) =>
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 carousel-img"
              src={v}
              alt="First slide"
            />
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}
export default UncontrolledExample;