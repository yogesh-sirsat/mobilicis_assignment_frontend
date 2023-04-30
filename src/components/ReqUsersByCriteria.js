import React, {useCallback, useEffect, useState} from 'react';
import axios from '../api/axios';
import UserDataTable from './UserDataTable';

function ReqUsersByCriteria(props) {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`api/users/${props.criteria}`);
    setUsers(response.data);
  }, [props.criteria]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <UserDataTable users={users} />
    </>
  );
}

export default ReqUsersByCriteria;