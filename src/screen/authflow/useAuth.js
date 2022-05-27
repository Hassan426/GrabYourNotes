import React, {useContext} from 'react';
import {AuthContext} from '../../../App';
const useAuth = () => {
  const {userId, setUserId} = useContext(AuthContext);
  const logOut = () => {
    setUserId(null);
  };
  return {userId, setUserId, logOut};
};
export default useAuth;
