const UserList = () => {
  const users = [
    { id: 1, name: "Ahmed", email: "ahmed@gmail.com" },
    { id: 2, name: "Ali", email: "ali@gmail.com" },
    { id: 3, name: "Ali", email: "ali@gmail.com" },
    { id: 4, name: "Amina", email: "amina@gmail.com" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;