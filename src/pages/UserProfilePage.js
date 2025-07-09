import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import '../styles/UserStyles.css';
import { useNavigate } from 'react-router-dom';

function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //bd.json
    useEffect(() => {
    fetch(`http://localhost:3001/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(() => setUser(null)); 
  }, [id]);

  const handleEmail = () => {
    const templateParams = {
      to_name: user.name,
      to_email: user.email,
      message: " I'm contacting you from the application "
    };

    emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        toast.success(`Email sent to ${user.email} `);
      },
      (error) => {
        toast.error("Failed to send the email");
        console.error(error);
      }
    );
  };

  const handleWhatsApp = () => {
    const number = user.phone.replace(/\D/g, '');
    window.open(`https://wa.me/${number}`, '_blank');
  };

  if (!user) return <p>	User not found</p>;

  return (
    <div className="user-container">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <img src={user.avatar} alt={user.name} className="user-avatar" />

      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>

      <button onClick={handleEmail} className="email-button">
        Send Email
      </button>

      <button onClick={handleWhatsApp} className="whatsapp-button">
        Contact via WhatsApp
      </button>
    </div>
  );
}

export default UserProfilePage;
