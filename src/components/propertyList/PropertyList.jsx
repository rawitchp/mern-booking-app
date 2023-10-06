import './propertyList.css';

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.common.com/_next/image?url=%2Fimages%2Fsplash-page.jpeg&w=3840&q=75"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/28/fd/37/ed/pearl-farm-beach-resort.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>233 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/361475781.jpg?k=cb90dab6095a2e64d81e5e140b62ac034d59b16b66bfdadfff77a21b70f0d8dd&o=&hp=1"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.wvlogcabins.com/wp-content/uploads/2020/10/HarmansCabin20_01-scaled.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
