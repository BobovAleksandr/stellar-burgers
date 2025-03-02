import rootReducer from './../src/services/rootReducer';

describe('Проверка инициализации стора', () => {
  test('Проверка RootReducer, должен возвращать стейт без изменений', () => {
    const initialState = {
      ingredients: {
        ingredients: [],
        isLoading: false,
        error: ''
      },
      consctructorSlice: {
        bun: null,
        ingredients: []
      },
      orders: {
        feeds: [],
        orders: [],
        total: 0,
        totalToday: 0,
        error: '',
        selectedOrder: null
      },
      user: {
        isUserCheckInProgress: false,
        user: null,
        error: undefined
      },
      orderSlice: {
        orderRequest: false,
        orderIngredients: [],
        orderData: null
      }
    };
    const newState = rootReducer(initialState, {} as any);
    expect(newState).toEqual(initialState);
  });
});
