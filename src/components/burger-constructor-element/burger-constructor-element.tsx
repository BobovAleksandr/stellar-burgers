import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import {
  deleteIngredient,
  moveIngredientDown,
  moveIngredientUp
} from '../../services/slices/constructorSlice';
import { useAppDispatch } from '../../services/hooks';

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useAppDispatch();

    const handleMoveDown = () => {
      dispatch(moveIngredientDown(ingredient));
    };

    const handleMoveUp = () => {
      dispatch(moveIngredientUp(ingredient));
    };

    const handleClose = () => {
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
