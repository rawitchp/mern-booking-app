import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { useFetch } from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error, reFetch } = useFetch(
    '/hotels/countByCity?cities[]=Berlin&cities[]=Madrid&cities[]=Bangkok'
  );
  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  const dates = [
    {
      startDate: new Date(),
      endDate: nextDate,
      key: 'selection',
    },
  ];
  console.log(dates);
  const options = {
    adult: 1,
    children: 0,
    room: 1,
  };
  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);

  const handleClick = (destination) => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
    navigate('/hotels', { state: { destination, dates, options } });
  };
  return (
    <div className="featured">
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div className="featuredItem" onClick={() => handleClick('berlin')}>
            <img
              src="https://media.cntraveler.com/photos/5b2be69494553e5edba9851d/4:3/pass/Dublin_GettyImages_688242264.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className="featuredItem" onClick={() => handleClick('madrid')}>
            <img
              src="https://cdn.vox-cdn.com/thumbor/-vfpLtT7iMEOTIvvFpg78GZ4uvA=/0x0:5272x3948/1200x675/filters:focal(2215x1553:3057x2395)/cdn.vox-cdn.com/uploads/chorus_image/image/69613790/GettyImages_1483954140.14.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className="featuredItem" onClick={() => handleClick('bangkok')}>
            <img
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRz0_YXObRTiMkEldAg3MUK8ow8rzaQ8C3QZ-mKZ23TjUXMAUpPOZDSHSClZUfoTbO6RDvRK_zCiP9_Q_jXw7hi0IiZHWsY"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangkok</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
