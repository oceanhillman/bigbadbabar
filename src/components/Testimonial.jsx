import Carousel from 'react-bootstrap/Carousel';
import TestimonialCard from './TestimonialCard';
import customer from "../images/customer.svg";

function Testimonial() {
  return (
    <Carousel
      data-bs-theme="dark"
      interval={20000}

    >
      <Carousel.Item>
        <TestimonialCard 
          name="Ariolis30"
          imgURL={customer}
          statement="BigBadBabar is hands down the most helpful affiliate out there.
          He is always looking in the best interest of his players and not himself first.
          I have a lot of poker friends and I just send them to him and I've had no complaints yet.
          I signed up on his Intertops and Bovada affiliate and I haven't had to worry about anything.
          If you need someone that's knowledgeable about the sites and not just trying to slang you a deal and make money off of you then look no further."
          about="Digital Merchant Solutions"
        />
      </Carousel.Item>
      <Carousel.Item>
        <TestimonialCard 
          name="ThePrezence"
          imgURL={customer}
          statement="I've known BigBadBabar for more than a decade and he is the most stand up and trustworthy guy I've ever met in Poker.
          My business partner and I ran what was the largest cash game staking stable online for many years and we had players all over the world that
          we staked and coached and BigBadBabar helped us out many times with all things Poker. When dealing with him, you can be confident that you're in good hands."
          about="C Biscuit Stables"
        />
      </Carousel.Item>
      <Carousel.Item>
        <TestimonialCard 
          name="Collin Moshman"
          imgURL={customer}
          statement="BigBadBabar is one of the good guys in the poker community. He has a great reputation and is someone I trust to trade and do business with."
          about={`Author of "Sit 'n Go Strategy"`}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonial;