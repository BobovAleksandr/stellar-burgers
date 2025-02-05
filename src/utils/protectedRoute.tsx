import { selectUser } from '@selectors';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Preloader } from '../components/ui/preloader';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactElement;
  onlyUnAuth?: boolean;
};

export const ProtectedRoute = ({
  onlyUnAuth,
  children
}: ProtectedRouteProps) => {
  const user = useSelector(selectUser);

  if (!onlyUnAuth && !user) {
    return <Navigate replace to={'/login'} />;
  }

  if (onlyUnAuth && user) {
    return <Navigate replace to='/' />;
  }

  return children;
};
