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
import { useContext, useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/Reserve';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();

  const { data, loading, error, reFetch } = useFetch(
    `/hotels/find/${location.pathname.split('/')[2]}`
  );

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDiff(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDiff(dates[0].endDate, dates[0].startDate);
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
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        'Loading...'
      ) : (
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
                <img
                  src={data.photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow" onClick={handleClick}>
              Reserve or Book Now!
            </button>
            <div className="hotelTitle">{data.name}</div>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    src={photo}
                    alt=""
                    className="hotelImg"
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Highlights of the accommodation</h1>
                <span>
                  Located in the best-rated area in Nong Prue, this hotel has an
                  excellent location score of 8.6
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && (
        <Reserve
          setOpen={setOpenModal}
          hotelId={location.pathname.split('/')[2]}
        />
      )}
    </div>
  );
};

export default Hotel;
