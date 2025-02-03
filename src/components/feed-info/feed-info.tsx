import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
import { selectOrders, selectFeedState } from '@selectors';

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
  /** TODO: взять переменные из стора - ГОТОВО **/
  const orders = useSelector(selectOrders);
  const feed = useSelector(selectFeedState);

  const readyOrders = getOrders(orders, 'done');

  const pendingOrders = getOrders(orders, 'pending');

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
