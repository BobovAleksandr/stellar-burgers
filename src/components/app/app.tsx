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
import { Routes, Route } from 'react-router-dom';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';

const App = () => (
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
      <Route
        path='/ingredients/:id'
        element={
          <Modal
            children={<IngredientDetails />}
            title={'TODO'}
            onClose={() => {}}
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

export default App;
