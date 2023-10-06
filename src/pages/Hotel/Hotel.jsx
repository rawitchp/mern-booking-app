import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hotel.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/415671437.jpg?k=eaa862cad5deb36d586c09a31ce63f51b8e5edbdf2c6a750fcfa16cb1a7bf12b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409718559.jpg?k=a195909205a94c61fb638d1894319174d2630d45201435bea07af7a41418462f&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409718545.jpg?k=735afcb096208e5623e4fbceb05879c045e4198b36cea1a3eeab4629b039197b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409718546.jpg?k=0262e8681e3451dd159e4aae11d206086b6ed22c50fa2fa0b5c1110de64f6436&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409718570.jpg?k=155fc27cb9a1cf4632c90dbb9fe2b0ba674da566d3732e7671b73413b514b285&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/409718576.jpg?k=36eb02d75305feaa2a533c541bda735ae4a9a1dea2df7df371bc90eaa445c98a&o=&hp=1',
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction === 'l') {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => {
                setOpen(false);
              }}
              className="close"
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove('l')}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <div className="hotelTitle">CASA HOTEL PATTAYA</div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              140/90 MOO11 NONGPRUE BANGLAMUNG, 20150 Nong Prue, Thailand –
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of Pattaya</h1>
              <p className="hotelDesc">
                M CASA HOTEL PATTAYA is located in Nong Prue Subdistrict. 700
                meters from Pattaya Beach, it offers accommodations with an
                outdoor swimming pool. Free private parking, a terrace and a
                restaurant. This 4-star hotel offers room service. There is a
                24-hour front desk and free WiFi. The property is non-smoking.
                It is 2.3 km from Cozy Beach. Every room at the hotel has a
                balcony with mountain views. At M CASA HOTEL PATTAYA, rooms have
                a private bathroom with a shower and free toiletries. It also
                has city views. Rooms at the property are air conditioned. and
                flat-screen television. Guests at M CASA HOTEL PATTAYA can enjoy
                a buffet or à la carte breakfast. Paradise Beach is 2.4 km from
                the hotel, while Bang Phra International Golf Course is 42 km
                from the property. The nearest airport is Utapao Rayong-Pattaya
                International Airport, 45 km from M CASA HOTEL PATTAYA.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Highlights of the accommodation</h1>
              <span>
                Located in the best-rated area in Nong Prue, this hotel has an
                excellent location score of 8.6
              </span>
              <h2>
                <b>$923</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
