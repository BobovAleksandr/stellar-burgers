// import { TIngredient } from '../src/utils/types';
// import ingredientsSlice, {
//   fetchIngredients
// } from './../src/services/slices/ingredientsSlice';
// import { configureStore } from '@reduxjs/toolkit';

// describe('Проверка ingredientsSlice', () => {
//   test('Ингредиенты загружаются успешно', async () => {
//     const expectedResult: TIngredient[] = [
//       {
//         _id: '_id1',
//         name: 'Ингредиент',
//         type: 'sauce',
//         proteins: 1,
//         fat: 2,
//         carbohydrates: 3,
//         calories: 4,
//         price: 100,
//         image: 'imageUrl',
//         image_large: 'imageUrl',
//         image_mobile: 'imageUrl'
//       },
//       {
//         _id: '_id2',
//         name: 'Ингредиент2',
//         type: 'sauce',
//         proteins: 1,
//         fat: 2,
//         carbohydrates: 3,
//         calories: 4,
//         price: 100,
//         image: 'imageUrl',
//         image_large: 'imageUrl',
//         image_mobile: 'imageUrl'
//       },
//       {
//         _id: '_id3',
//         name: 'Ингредиент3',
//         type: 'sauce',
//         proteins: 1,
//         fat: 2,
//         carbohydrates: 3,
//         calories: 4,
//         price: 100,
//         image: 'imageUrl',
//         image_large: 'imageUrl',
//         image_mobile: 'imageUrl'
//       }
//     ];
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(expectedResult)
//       })
//     ) as jest.Mock;
//     const store = configureStore({
//       reducer: { ingredients: ingredientsSlice.reducer }
//     });
//     await store.dispatch(fetchIngredients());
//     console.log('State after dispatch:', store.getState().ingredients);
//     const { ingredients, isLoading, error } = store.getState().ingredients;
//     expect(isLoading).toEqual(false);
//     expect(error).toBeNull();
//     expect(ingredients).toEqual(expectedResult);
//   });
// });
