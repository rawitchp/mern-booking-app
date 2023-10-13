import { useFetch } from '../../hooks/useFetch';
import './propertyList.css';

const PropertyList = () => {
  const { data, loading, error, reFetch } = useFetch('/hotels/countByType');
  return (
    <div className="pList">
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div className="pListItem">
            <img
              src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[0]?.type}</h1>
              <h2>
                {data[0]?.count} {data[0]?.type}
              </h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://www.common.com/_next/image?url=%2Fimages%2Fsplash-page.jpeg&w=3840&q=75"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[1]?.type}</h1>
              <h2>
                {data[1]?.count} {data[1]?.type}s
              </h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/28/fd/37/ed/pearl-farm-beach-resort.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[2]?.type}</h1>
              <h2>
                {data[2]?.count} {data[2]?.type}s
              </h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/361475781.jpg?k=cb90dab6095a2e64d81e5e140b62ac034d59b16b66bfdadfff77a21b70f0d8dd&o=&hp=1"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[3]?.type}</h1>
              <h2>
                {data[3]?.count} {data[3]?.type}s
              </h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://www.wvlogcabins.com/wp-content/uploads/2020/10/HarmansCabin20_01-scaled.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[4]?.type}</h1>
              <h2>
                {data[4]?.count} {data[4]?.type}s
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;
