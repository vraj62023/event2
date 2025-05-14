'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StarBackground from '@/components/StarBackground.js';

const Login = () => {
  const router = useRouter();  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    teamName: '',
    teamMembers: 1,
    captainName: '',
    phone: '',
    institute: '',
    experienceLevel: 'beginner',
    avatar: ''
  });

  const [memberNames, setMemberNames] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'teamMembers' ? Number(value) : value
    }));
  };

  const handleMemberChange = (e, index) => {
    const { value } = e.target;
    setMemberNames((prev) => ({
      ...prev,
      [`member${index}`]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const completeData = {
      ...formData,
      ...memberNames
    };

    localStorage.setItem('spaceQuizUser', JSON.stringify(completeData));
    router.push(`/profile?userData=${encodeURIComponent(JSON.stringify(completeData))}`);
  };

  return (
    <div className="login-container">
      <StarBackground />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Team Login</h2>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Team Name:</label>
          <input type="text" name="teamName" className="form-control" value={formData.teamName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Captain Name:</label>
          <input type="text" name="captainName" className="form-control" value={formData.captainName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Institute:</label>
          <input type="text" name="institute" className="form-control" value={formData.institute} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Experience Level:</label>
          <select name="experienceLevel" className="form-control" value={formData.experienceLevel} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Team Members:</label>
          <select name="teamMembers" className="form-control" value={formData.teamMembers} onChange={handleChange}>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {[...Array(formData.teamMembers - 1)].map((_, index) => (
          <div className="form-group" key={index}>
            <label>{`Member ${index + 1} Name:`}</label>
            <input
              type="text"
              className="form-control"
              value={memberNames[`member${index + 1}`] || ''}
              onChange={(e) => handleMemberChange(e, index + 1)}
            />
          </div>
        ))}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
