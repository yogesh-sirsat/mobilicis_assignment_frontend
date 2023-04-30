import React, { useCallback, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../api/axios";

function ReqUsersByCriteria() {
  const [cities, setCities] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`api/cities/topten`);
    setCities(response.data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (cities.length === 0) {
    return (
        <h1>No city data available. </h1>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>User Count</th>
          <th>Avg Income</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{city.city}</td>
            <td>{city.user_count}</td>
            <td>${city.avg_income}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReqUsersByCriteria;
