import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { deleteIngredient } from '../../services/slices/constructorSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/services/store';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    
    const dispatch = useDispatch<AppDispatch>();

    const handleMoveDown = () => {
      // TODO
    };

    const handleMoveUp = () => {
      // TODO
    };

    const handleClose = () => {
      console.log(ingredient.id)
      dispatch(deleteIngredient(ingredient));
    };

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleClose}
      />
    );
  }
);
