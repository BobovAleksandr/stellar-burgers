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
import { Navigate } from 'react-router-dom';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='*' element={<NotFound404 />} />
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/feed/:number'
          element={
            <Modal children={<OrderInfo />} title={'TODO'} onClose={() => {}} />
          }
        />
        // TODO модалки должны загружаться на фоне с главной страницей
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
        // TODO сделать все снизу защищенными
        <Route
          path='/profile/orders/:number'
          element={
            <Modal children={<OrderInfo />} title={'TODO'} onClose={() => {}} />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />
      </Routes>
    </div>
  );
};

export default App;
