import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log('https://long-tan-greyhound-cape.cyclic.app/api' + url);
      try {
        const res = await axios.get(
          'https://long-tan-greyhound-cape.cyclic.app/api' + url
        );
        console.log(res);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        'https://long-tan-greyhound-cape.cyclic.app/api' + url
      );
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};
