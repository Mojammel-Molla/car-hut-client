import { useEffect, useState } from 'react';
import SectionBanner from '../../shared/section-banner/SectionBanner';
import useAxios from '../../hooks/useAxios';
import UpdateCard from './UpdateCard';

const UpdateItems = () => {
  const axios = useAxios();
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    axios.get('/all-products').then(res => {
      setAllItems(res.data);
    });
  }, [axios]);

  return (
    <div>
      <SectionBanner title="Dashboard" subTitle="Update-Items"></SectionBanner>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 p-5">
        {allItems.map(item => (
          <UpdateCard key={item._id} item={item}></UpdateCard>
        ))}
      </div>
    </div>
  );
};

export default UpdateItems;
