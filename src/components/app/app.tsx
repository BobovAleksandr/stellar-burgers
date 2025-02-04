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

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;

  return (
    <div className={styles.app}>
      <AppHeader />

      <Routes location={background || location}>
        <Route path='/feed' element={<Feed />} />
        {/* <Route path='/feed/:number' element={<OrderInfo />} /> */}
        <Route path='*' element={<NotFound404 />} />
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/login' element={<Login />} />
        {/* TODO модалки должны загружаться на фоне с главной страницей */}
        {/* <Route
          path='/profile/orders/:number'
          element={
            <Modal children={<OrderInfo />} title={'TODO'} onClose={() => {}} />
          }
        /> */}
        {/* <Route path='/register' element={<Register />} /> */}
        {/* <Route path='/forgot-password' element={<ForgotPassword />} /> */}
        {/* <Route path='/reset-password' element={<ResetPassword />} /> */}
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/profile/orders' element={<ProfileOrders />} /> */}
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
          {/* TODO - Не грузится после обновления страницы конкретного заказа */}
          <Route
            path='/feed/:number'
            element={
              <Modal
                children={<OrderInfo />}
                // TODO - номер заказа в заголовок
                title={'# НОМЕР ЗАКАЗА'}
                onClose={() => {
                  navigate('/feed');
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
