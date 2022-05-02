import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line consistent-return
const PrivateRoute = ({ children }) => {
  const loading = false;
  const accessToken = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && !loading) {
      navigate('/login');
    }
  }, []);

  if (accessToken) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <p>Something went wrong</p>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
