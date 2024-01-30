import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../helpers/api/dummy';

//custom hook to fetch data
//fetch data will be  a prop to call this hook to fetch what ever data
export const useFetchData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  });

  return { data, error, isLoading };
};
//use
// const { data } = useFetchData();
