import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { useEffect } from 'react';
import { fetchIngredients } from '../../services/slices/ingredientsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/store';
import { ProtectedRoute } from '../../utils/protectedRoute';
import { fetchGetUser } from '../../services/slices/userSlice';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  console.log(background, 'background');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchGetUser());
  }, []);

  return (
    // TODO - компонент модалки при прмом URL поправить чтобы был по центру
    // Если не залогинен - редирект на то же окно после логина
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path='/feed' element={<Feed />} />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/ingredients/:id' element={<IngredientDetails />} />
        <Route path='/feed/:id' element={<OrderInfo />} />

        <Route
          path='/register'
          element={
            <ProtectedRoute onlyUnAuth>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/orders/:id'
          element={
            <ProtectedRoute>
              <OrderInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <ProtectedRoute onlyUnAuth>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute onlyUnAuth>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute onlyUnAuth>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/orders'
          element={
            <ProtectedRoute>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={
              <Modal
                children={<IngredientDetails />}
                title={'Детали ингридиента'}
                onClose={() => {
                  navigate('/');
                }}
              />
            }
          />
          <Route
            path='/feed/:id'
            element={
              <Modal
                children={<OrderInfo />}
                // TODO - номер заказа в заголовок
                title={'ОРДЕР НУМБЕР'}
                onClose={() => {
                  navigate('/feed');
                }}
              />
            }
          />
          <Route
            path='/profile/orders/:id'
            element={
              <Modal
                children={
                <ProtectedRoute>
                  <OrderInfo />
                </ProtectedRoute>
              }
                // TODO - номер заказа в заголовок
                title={'ОРДЕР НУМБЕР'}
                onClose={() => {
                  navigate('/profile/orders');
                }}
              />
            }
          />
        </Routes>
        
      )}
    </div>
  );
};

export default App;
