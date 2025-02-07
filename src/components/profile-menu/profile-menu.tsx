import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { fetchLogoutUser } from '../../services/slices/userSlice';
import { useAppDispatch } from '../../services/hooks';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
