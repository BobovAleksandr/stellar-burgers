import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFeeds } from '@selectors';
import { AppDispatch } from '../../services/store';
import { fetchFeeds } from '../../services/slices/ordersSlice';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора **/
  const orders = useSelector(selectFeeds);
  const dispatch = useDispatch<AppDispatch>();

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
