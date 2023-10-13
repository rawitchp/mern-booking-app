import { useFetch } from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
  const { data, loading, error, reFetch } = useFetch(
    '/hotels?featured=true&limit=4'
  );

  return (
    <div className="fp">
      {loading ? (
        'Loading...'
      ) : (
        <>
          {data.map((item) => {
            return (
              <div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpProce">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
      {/* <div className="fpItem">
        <img
          src="https://images.trvl-media.com/lodging/5000000/4320000/4310600/4310502/38f39448.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpProce">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.trvl-media.com/lodging/5000000/4320000/4310600/4310502/38f39448.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpProce">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.trvl-media.com/lodging/5000000/4320000/4310600/4310502/38f39448.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpProce">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.trvl-media.com/lodging/5000000/4320000/4310600/4310502/38f39448.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpProce">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedProperties;
