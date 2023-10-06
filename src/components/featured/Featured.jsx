import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.cntraveler.com/photos/5b2be69494553e5edba9851d/4:3/pass/Dublin_GettyImages_688242264.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.vox-cdn.com/thumbor/-vfpLtT7iMEOTIvvFpg78GZ4uvA=/0x0:5272x3948/1200x675/filters:focal(2215x1553:3057x2395)/cdn.vox-cdn.com/uploads/chorus_image/image/69613790/GettyImages_1483954140.14.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>532 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2021-10/cdbf6c3a-3118-4504-af80-040711d0efb6.jpeg?h=5349636e&itok=RCv-Fmrg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>522 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
