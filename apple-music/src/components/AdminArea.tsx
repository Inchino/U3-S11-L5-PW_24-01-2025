import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import NuoveUscite from './NuoveUscite';
import ArrayDati from '../types/ArrayDati';
import GetFetchProps from '../types/GetFetchProps';

const AdminArea = () => {
  const [array, setData] = useState<ArrayDati[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=lazza');
        if (response.ok) {
            const risposta : GetFetchProps = await response.json()
            //console.log(risposta)
            setData(risposta.data)
            setIsLoading(false)
            setIsError(false)
          } else {
            console.log('error')
            setIsLoading(false)
            setIsError(true)
          }
        } catch (error) {
          console.log(error)
          setIsLoading(false)
          setIsError(true)
        }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <NuoveUscite tracks={array}/>
      )}
    </div>
  );
};

export default AdminArea;