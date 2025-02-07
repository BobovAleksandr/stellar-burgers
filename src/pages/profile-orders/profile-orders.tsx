import { selectOrders } from '@selectors';
import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../services/slices/ordersSlice';
import { AppDispatch } from '../../services/store';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [])

  return <ProfileOrdersUI orders={orders} />;
};
