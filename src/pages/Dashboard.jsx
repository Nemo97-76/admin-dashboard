import "./Dashboard.css";

const Dashboard=()=> {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+5.2%' },
    { title: 'Revenue', value: '$45,678', change: '+3.1%' },
    { title: 'Active Sessions', value: '789', change: '-1.2%' },
    { title: 'New Signups', value: '56', change: '+12.5%' },
  ];

  return (
    <div>
      <h3 >
        Overview
      </h3>
      <div className="dahboard-grid" >
        {stats.map((stat) => (
          <div className="card" key={stat.title}>
            <h4>{stat.title}</h4>
            <p>
              {stat.value}
            </p>
            <p style={{ fontSize: '0.875rem', color: stat.change.startsWith('+') ? '#22c55e' : '#ef4444' }}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
      <div className="dahboard-largerCard">
        <h4 >
          Recent Activity
        </h4>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              { user: 'John Doe', action: 'Logged in', date: '2025-05-18' },
              { user: 'Jane Smith', action: 'Updated profile', date: '2025-05-18' },
              { user: 'Mike Johnson', action: 'Made purchase', date: '2025-05-17' },
            ].map((activity) => (
              <tr key={activity.user}>
                <td>{activity.user}</td>
                <td>{activity.action}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;