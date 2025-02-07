import { FC, useEffect, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectConstructorIems,
  selectOrderData,
  selectOrderRequest,
  selectOrderIngredients
} from '@selectors';
import { clearOrderData, createOrder, fetchOrderBurger } from '../../services/slices/orderSlice';
import { AppDispatch } from 'src/services/store';
import { clearConstructorData } from '../../services/slices/constructorSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const constructorItems = useSelector(selectConstructorIems);
  const orderRequest = useSelector(selectOrderRequest);
  const orderModalData = useSelector(selectOrderData);
  const orderIngredients = useSelector(selectOrderIngredients);

  const onOrderClick = () => {
    if (constructorItems.bun) {
      dispatch(createOrder(constructorItems));
    }
  };

  const closeOrderModal = () => {
    dispatch(clearOrderData());
    dispatch(clearConstructorData());
  };

  useEffect(() => {
    if (orderIngredients.length > 0) {
      dispatch(fetchOrderBurger(orderIngredients));
    }
  }, [orderIngredients, dispatch])

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
