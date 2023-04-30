import Table from "react-bootstrap/Table";

const UserDataTable = (props) => {
  if (props.users.length === 0) {
    return ( <h1>No user data available. </h1>);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Phone Price</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.income}</td>
            <td>{user.city}</td>
            <td>{user.car}</td>
            <td>{user.quote}</td>
            <td>{user.phone_price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserDataTable;
