import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserStyles.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="user-avatar-small" />
      <h2>{user.name}</h2>
      <Link to={`/user/${user.id}`}>
        <button className="view-profile-btn">
          View Profile
        </button>
      </Link>
    </div>
  );
}

export default UserCard;
