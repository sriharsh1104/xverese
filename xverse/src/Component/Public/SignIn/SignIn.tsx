import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignIn.css';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
    password: '',
  });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate successful login (replace this with actual login logic)
    if (formData.emailOrMobile && formData.password) {
      // Navigate to Dashboard page on successful login
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="emailOrMobile">Email or Mobile Number</label>
          <input
            type="text"
            id="emailOrMobile"
            name="emailOrMobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
