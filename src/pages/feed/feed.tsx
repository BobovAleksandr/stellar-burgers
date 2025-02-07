import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFeeds } from '@selectors';
import { fetchFeeds } from '../../services/slices/ordersSlice';
import { useAppDispatch } from '../../services/hooks';

export const Feed: FC = () => {
  const orders = useSelector(selectFeeds);
  const dispatch = useAppDispatch();

  const getFeeds = () => {
    dispatch(fetchFeeds());
  };

  useEffect(() => {
    getFeeds();
  }, []);

  if (!orders.length) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={getFeeds} />;
};
