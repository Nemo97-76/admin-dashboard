import "../App.css"

const Users = () => {
    const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', status: 'Active' },
  ];
    return (
        <>
<div className="Users">
<h3>Users</h3>
<div className="tableHolder">
    <table>
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td style={{ padding: '0.5rem', color: user.status === 'Active' ? '#22c55e' : '#ef4444' }}>
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
    </table>
</div>
</div>
        </>
    )
}
export default Users;