import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import '../styles/UserStyles.css';

function UsersPage() {
      const [users, setUsers] = useState([]);
      const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  //serch
  const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1 className="user-title">User Profiles</h1>
        <input className="search-input"
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
{filteredUsers.length > 0 ? (
  <div className="users-grid">
    {filteredUsers.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
) : (
  <p className="no-users">No users found.</p>
)}
    </div>
    
  );
}
export default UsersPage;