import { selectOrders } from '@selectors';
import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchOrders } from '../../services/slices/ordersSlice';
import { Preloader } from '@ui';
import { useAppDispatch } from '../../services/hooks';

export const ProfileOrders: FC = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  if (orders.length === 0) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};
