import { configureStore } from '@reduxjs/toolkit';
import orderSlice, {
  clearOrderData,
  createOrder,
  fetchOrderBurger
} from './../src/services/slices/orderSlice';

describe('Проверка orderSlice', () => {
  const orderSliceReducer = orderSlice.reducer;
  const initialState = {
    orderRequest: false,
    orderIngredients: [],
    orderData: null
  };
  const testOrder = {
    bun: {
      _id: '_id0',
      id: 'id0',
      name: 'Булка',
      type: 'bun',
      proteins: 1,
      fat: 2,
      carbohydrates: 3,
      calories: 4,
      price: 100,
      image: 'imageUrl',
      image_large: 'imageUrl',
      image_mobile: 'imageUrl'
    },
    ingredients: [
      {
        _id: '_id1',
        id: 'id1',
        name: 'Ингредиент',
        type: 'sauce',
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 4,
        price: 100,
        image: 'imageUrl',
        image_large: 'imageUrl',
        image_mobile: 'imageUrl'
      },
      {
        _id: '_id2',
        id: 'id2',
        name: 'Ингредиент2',
        type: 'sauce',
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 4,
        price: 100,
        image: 'imageUrl',
        image_large: 'imageUrl',
        image_mobile: 'imageUrl'
      },
      {
        _id: '_id3',
        id: 'id3',
        name: 'Ингредиент3',
        type: 'sauce',
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 4,
        price: 100,
        image: 'imageUrl',
        image_large: 'imageUrl',
        image_mobile: 'imageUrl'
      }
    ]
  };
  const newTestOrderIngredients = ['_id0', '_id1', '_id2', '_id3', '_id0'];

  test('Ингредиенты добавляются в заказ', () => {
    const newState = orderSliceReducer(initialState, createOrder(testOrder));
    const { orderIngredients } = newState;
    expect(orderIngredients).toEqual(newTestOrderIngredients);
  });

  test('Ингредиенты удаляются из заказа', () => {
    const stateWithIngredients = {
      ...initialState,
      orderIngredients: [...newTestOrderIngredients]
    };
    const newState = orderSliceReducer(stateWithIngredients, clearOrderData());
    const { orderIngredients } = newState;
    expect(orderIngredients).toHaveLength(0);
  });

  test('Заказ создаётся', async () => {
    const expectedOrderData = {
      success: true,
      order: {
        _id: '1234',
        status: 'success',
        name: 'newOrder',
        createdAt: 'someDate',
        updatedAt: 'someDate',
        number: 1234,
        ingredients: [...newTestOrderIngredients]
      },
      name: 'newOrderName'
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedOrderData)
      })
    ) as jest.Mock;
    const store = configureStore({
      reducer: { order: orderSliceReducer }
    });
    await store.dispatch(fetchOrderBurger(newTestOrderIngredients));
    const { orderRequest, orderIngredients, orderData } =
      store.getState().order;
    expect(orderRequest).toEqual(false);
    expect(orderIngredients).toEqual(newTestOrderIngredients);
    expect(orderData).toEqual(expectedOrderData);
  });
});
