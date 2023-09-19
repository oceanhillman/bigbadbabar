import Carousel from 'react-bootstrap/Carousel';
import Testimonial1 from "../testimonial1.png";
import Testimonial3 from "../testimonial3.png";

function Testimonial() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className=" w-2/5 mx-auto testimonial" src={Testimonial1} alt="Testimonial"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-2/5 mx-auto testimonial" src={Testimonial3} alt="Testimonial"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-2/5 mx-auto testimonial" src={Testimonial1} alt="Testimonial"></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonial;